
// controllers/thoughtController.js
const Thought = require('./Thought');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const updated = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      res.json(updated);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const deleted = await Thought.findByIdAndDelete(req.params.thoughtId);
      res.json(deleted);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addReaction(req, res) {
    try {
      const updated = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true }
      );
      res.json(updated);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const updated = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      res.json(updated);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
