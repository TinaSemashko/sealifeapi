import joi from "joi";

export const createUserSchema = {
  id: joi.string().required(),
  api_key: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
};
