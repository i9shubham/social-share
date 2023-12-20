import postModel from '../models/postSchema.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await postModel.paginate(
            {},
            { page: req.query.page || 1, limit: 10, sort: { createdAt: -1 } }
        );
        if (posts) {
            return res.status(200).send({
                code: 200,
                message: `Post getting successful`,
                success: true,
                docs: posts,
            });
        } else {
            return res.status(400).send({
                code: 400,
                message: 'Post not found',
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

export const addPost = async (req, res) => {
    const post = req.body;
    const newPost = new postModel({ ...post });
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

export const searchPost = async (req, res) => {
    const { keywords } = req.query;
    try {
        const posts = await postModel.find({
            message: { $regex: keywords, $options: 'i' },
        });
        if (posts) {
            return res.status(200).send({
                code: 200,
                message: `Post getting successful`,
                success: true,
                docs: posts,
            });
        } else {
            return res.status(400).send({
                code: 400,
                message: 'Post not found',
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
