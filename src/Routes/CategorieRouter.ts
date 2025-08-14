import { Router } from "express";
import * as CetegorieController from '../Controllers/CategorieController.js'

const router=Router()

router.get('/', CetegorieController.listCategories);


export  default router;
