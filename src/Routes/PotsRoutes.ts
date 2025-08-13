import { Router } from "express";
import * as PostController from '../Controllers/PostController.js'

const router=Router()

router.get('/',PostController.listPosts);
router.get('/:id',PostController.getPost);
router.post('/',PostController.createPost);
router.put('/:id',PostController.updatePost);
router.delete('/:id',PostController.deletePost);


export  default router;
