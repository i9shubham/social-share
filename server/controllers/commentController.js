import commentModel from '../models/commentSchema';

export const getComments = async (req, res) => {
    try {
        const comments = await commentModel.paginate(
            {post: req.params.postId},
            { page: req.query.page || 1, limit: 10, sort: { createdAt: -1 } }
        );
        if (comments) {
            return res.status(200).send({
                code: 200,
                message: `Comments getting successful`,
                success: true,
                docs: comments,
            });
        } else {
            return res.status(400).send({
                code: 400,
                message: 'Comments not found',
                success: false,
            });
        }
    } catch (error) {
        // console.log(error);
        return res.status(500).send({
            code: 500,
            message: 'Internal Server Error',
            success: false,
            error: error.message,
        });
    }
};

export const addComment = async (req, res) => {
    const post = req.body;
    const newPost = new commentModel({ ...post, user: req.userId });
    try {
        await newPost.save();
        if (!newPost) {
            return res.status(400).send({
                code: 400,
                message: 'Post not created',
                success: false,
            });
        } else {
            return res.status(200).send({
                code: 201,
                message: `Post created successfully`,
                success: true,
            });
        }
    } catch (error) {
        // console.log(error);
        return res.status(500).send({
            code: 500,
            message: 'Internal Server Error',
            success: false,
            error: error.message,
        });
    }
};
