import { NextFunction, Request, Response } from "express";
import appError from "../errors/App.error";

export const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof appError) {
    return res.status(error.status).json({ message: error.message });
  }

  console.log(error);
  return res
    .status(500)
    .json({
      message: "Internal server error"
    });
};
