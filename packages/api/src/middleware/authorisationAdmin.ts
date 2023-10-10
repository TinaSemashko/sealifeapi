import Express from "express";
import { User } from "../models/types/user";
import { AdminAPIKey } from "../../config";

export interface UserResponse extends Express.Request {
  user?: User;
}

const authorizationAdmin = async (
  req: UserResponse,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const apiKey = req.query.api_key ? req.query.api_key?.toString() : "";

  if (!apiKey) {
    return res.status(401).send();
  }
  if (apiKey !== AdminAPIKey) {
    return res
      .status(403)
      .json({ error: "You don't have right for that operation" });
  }

  next();
};

export default authorizationAdmin;
