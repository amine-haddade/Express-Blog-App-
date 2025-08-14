import type { NextFunction, Request, Response } from "express";
import categories from "../Data/categories.js";

export const listCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    return res.status(200).json({ success: true, data: categories });
  };
