import express from 'express';
import { addPost, getPosts } from '../controllers/postController';

const router = express.Router();

router.get('/getAllPosts', getPosts);
router.post('/addPost', addPost);

export default router;
