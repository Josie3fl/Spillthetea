
const User = require('./User');

module.exports = {
  async getUsers(req, res) {
    const users = await User.find().populate('friends thoughts');
    res.json(users);
  },
  async getSingleUser(req, res) {
    const user = await User.findById(req.params.userId)
      .populate('thoughts')
      .populate('friends');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async updateUser(req, res) {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  },
  async deleteUser(req, res) {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  }
};
// This code defines a user controller for handling user-related operations in a social media application.