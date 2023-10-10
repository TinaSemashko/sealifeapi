import { knex } from "../../db";
import { Review } from "./types/review";

export const table = "avis";

export const getReviews = async () => {
  const results = await knex<Review>(table).select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getReviewByModel = async (id_model: string) => {
  const results = await knex<Review>(table).select("*").where({ id_model });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const createReview = async (data: Review) => {
  const results: number[] = await knex<Review>(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};

export const removeReview = async (id: string) => {
  const results = await knex<Review>(table).where(id).delete().returning("id");

  return results[0];
};
