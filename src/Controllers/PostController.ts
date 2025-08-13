import type { NextFunction, Request, Response } from "express";
import * as PostModel from "../Models/Post.js";

export const listPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await PostModel.getAllPosts();
    return res.status(200).json({ success: true, data: posts });
  } catch (err) {
    next(err);
  }
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Le champ  id  est obligatoire pour la mise à jour",
      });
    }
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, message: "id invalide" });
    }
    const post = await PostModel.getPostById(parseInt(id));
    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "Post non trouvé" });
    return res.status(200).json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;
    // validation simple
    if (
      !title ||
      !title.toString().trim() ||
      !content ||
      !content.toString().trim()
    ) {
      return res
        .status(400)
        .json({ success: false, message: "title et content sont requis" });
    }
    const newPost = await PostModel.createPost({
      title: title.toString().trim(),
      content: content.toString().trim(),
    });
    return res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Le champ  id  est obligatoire pour la mise à jour",
      });
    }

    const { title, content } = req.body;
    if (Number.isNaN(id))
      return res.status(400).json({ success: false, message: "id invalide" });
    if (
      (!title || !title.toString().trim()) &&
      (!content || !content.toString().trim())
    ) {
      return res.status(400).json({
        success: false,
        message: "title ou content requis pour la mise à jour",
      });
    }
    const updated = await PostModel.updatePost(parseInt(id), {
      title: title?.toString().trim(),
      content: content?.toString().trim(),
    });
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Post non trouvé" });
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Le champ  id  est obligatoire pour la mise à jour",
      });
    }
    if (Number.isNaN(id))
      return res.status(400).json({ success: false, message: "id invalide" });
    const removed = await PostModel.deletePost(parseInt(id));
    if (!removed)
      return res
        .status(404)
        .json({ success: false, message: "Post non trouvé" });
    return res.status(200).json({ success: true, data: removed });
  } catch (err) {
    next(err);
  }
};
