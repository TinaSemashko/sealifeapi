import Express from "express";
import { User } from "../models/types/user";
import * as userModel from "../models/user";

export interface UserResponse extends Express.Request {
  user?: User;
}

const authorization = async (
  req: UserResponse,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const allUsers = await userModel.getUsers();
  if (!allUsers) {
    return res.status(404).send({ message: "Users have not been founded" });
  } else {
    const apiKeysDB: string[] = allUsers.map((item) => item.api_key);
    const apiKey = req.query.api_key ? req.query.api_key?.toString() : "";

    if (!apiKey) {
      return res.status(401).send();
    }
    if (!apiKeysDB.includes(apiKey)) {
      return res.status(403).json({ error: "Invalid API key" });
    }
  }

  next();
};

export default authorization;
