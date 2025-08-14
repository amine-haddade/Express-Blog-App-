import { Router } from "express";
import * as PostController from '../Controllers/PostController.js'

const router=Router()

router.get('/', PostController.listPosts);
// Serve categories under /posts/categories for frontend compatibility
// router.get('/categories', PostController.listCategories);
// Put specific routes before parameterized ones
router.get('/:id', PostController.getPost);
router.post('/',PostController.createPost);
router.put('/:id',PostController.updatePost);
router.delete('/:id',PostController.deletePost);


export  default router;
