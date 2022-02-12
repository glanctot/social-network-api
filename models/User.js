const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thought: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }
],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }, 
    id: false
})


//get total count of friends
 UserSchema.virtual('friendCount').get(function() {
     return this.friends.length
})

//create user model using userSchema
const User = model('User', UserSchema);

module.exports = User;