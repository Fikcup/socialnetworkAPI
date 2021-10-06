const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // add jquery getter method to format date
        },
        username: {
            type: String,
            required: true,
        },
        // Import reaction schema as a sub array
        reactions: [Reaction]
    }
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;