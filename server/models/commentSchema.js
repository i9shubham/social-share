import mongoose from 'mongoose';

const Comment = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            unique: true,
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
        },
        comment: {
            type: String,
            require: true,
        },
    },
    { versionKey: false }
);

export default mongoose.model('Comment', Comment);
