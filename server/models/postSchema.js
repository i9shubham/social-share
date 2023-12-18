import mongoose from 'mongoose';

const Post = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            unique: true,
        },
        content: {
            type: String,
            require: true,
        },
    },
    { versionKey: false }
);

export default mongoose.model('Post', Post);
