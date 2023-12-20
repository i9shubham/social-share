import mongoose from 'mongoose';

const User = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    { versionKey: false }
);

export default mongoose.model('User', User);
