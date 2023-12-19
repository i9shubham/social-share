import express from 'express';
import { addPost, getPosts, searchPost } from '../controllers/postController';

const router = express.Router();

router.get('/getAllPosts', getPosts);
router.get('/searchPost', searchPost);
router.post('/addPost', addPost);

export default router;
