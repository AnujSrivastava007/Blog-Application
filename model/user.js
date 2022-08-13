import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Schema, model } = pkg;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [{
        type:mongoose.Types.ObjectId,
        ref: "Blog",
        required:true
    }]
})

const User = model('User',UserSchema);
// users
export default User;