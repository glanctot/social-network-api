const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    // reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
})

// virtual for reactionCount retrieves the length of the reactions array
// ThoughtSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length;
// })

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;