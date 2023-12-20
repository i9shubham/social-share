import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Post = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
        },
        username: {
            type: String,
        },
        content: {
            type: String,
            require: true,
        },
    },
    { versionKey: false }
);

Post.plugin(mongoosePaginate);
export default mongoose.model('Post', Post);
