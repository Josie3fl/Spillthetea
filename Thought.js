const { Schema, model, Types } = require('mongoose');
const formatDate = require('./utils/dateFormat');
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
    }
  },
  {
    toJSON: { getters: true },
    id: false
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: { virtuals: true, getters: true },
    id: false
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

module.exports = model('Thought', thoughtSchema);
// This code defines a Mongoose schema for a Thought model in a social media application, including nested reactions with their own schema.