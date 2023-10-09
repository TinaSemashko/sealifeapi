import Express from "express";
import { User } from "../models/types/user";

export interface UserResponse extends Express.Request {
  user?: User;
}

const apiKeysDB = {
  "your-api-key-1": { userId: 1 },
  "your-api-key-2": { userId: 2 },
};

const authorization = async (
  req: UserResponse,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const apiKey = req.query.apikey;
  if (!req.user) {
    return res.status(401).send();
  }
  //   if (!apiKey || !apiKeysDB[apiKey]) {
  //     return res.status(403).json({ error: "Недопустимый API ключ" });
  //   }

  next();
};

export default authorization;
