import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Comment = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
        },
        username: {
            type: String,
            require: true,
        },
        comment: {
            type: String,
            require: true,
        },
    },
    { versionKey: false }
);

Comment.plugin(mongoosePaginate);
export default mongoose.model('Comment', Comment);
