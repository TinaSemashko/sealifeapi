import { Request, Response } from "express";
import * as reviewModel from "../models/review";

type Review = typeof reviewModel;

export const getReviews =
  (model: Review) => async (req: Request, res: Response) => {
    const review = await model.getReviews();

    if (!review) {
      return res.status(404).send({ message: "No reviews" });
    }

    res.send({ results: [review] });
  };

export const getReviewByModel =
  (model: Review) => async (req: Request, res: Response) => {
    const { id_model } = req.query;

    const review = await model.getReviewByModel(id_model as string);

    if (!review) {
      return res.status(404).send({ message: "Reviews doesn't existe" });
    }

    res.send({ results: [review] });
  };

export const createNewReview =
  (model: Review) => async (req: Request, res: Response) => {
    const { data } = req.body;
    const reviewId = await model.createReview(data as any);

    if (!reviewId) {
      return res.status(404).send({ message: "Something went wrong..." });
    }

    res.send({ results: [reviewId] });
  };

export const removeReviewById =
  (model: Review) => async (req: Request, res: Response) => {
    const { id } = req.query;
    const reviewId = await model.removeReview(id as string);

    if (!reviewId) {
      return res.status(404).send({ message: "Something went wrong..." });
    }

    res.send({ results: [reviewId] });
  };
