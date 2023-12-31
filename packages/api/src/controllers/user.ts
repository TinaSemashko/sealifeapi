import { Request, Response } from "express";
import * as userModel from "../models/user";

type User = typeof userModel;

export const getProfile =
  (model: User) => async (req: Request, res: Response) => {
    const { email, password } = req.query;

    const user = await model.getUser(email as string, password as string);

    if (!user) {
      return res.status(404).send({ message: "User doesn't existe" });
    }

    res.send({ results: [user] });
  };

export const getAllUsers =
  (model: User) => async (req: Request, res: Response) => {
    const user = await model.getUsers();

    if (!user) {
      return res.status(404).send({ message: "No users" });
    }

    res.send({ results: [user] });
  };

export const getUserById =
  (model: User) => async (req: Request, res: Response) => {
    const { id } = req.query;

    const user = await model.getUserById(id as string);

    if (!user) {
      return res.status(404).send({ message: "User doesn't existe" });
    }

    res.send({ results: [user] });
  };

export const getAdmin =
  (model: User) => async (req: Request, res: Response) => {
    const { api_key } = req.query;

    const user = await model.getAdmin(api_key as string);

    if (!user) {
      return res.status(404).send({ message: "User doesn't existe" });
    }

    res.send({ results: [user] });
  };

export const updateUserById =
  (model: User) => async (req: Request, res: Response) => {
    const { id } = req.query;
    const { data } = req.body;

    const userId = await model.putUserById(id as string, data as any);

    if (!userId) {
      return res.status(400).send({ message: "User doesn't modified" });
    }

    res.send({ results: [userId] });
  };

export const createNewUser =
  (model: User) => async (req: Request, res: Response) => {
    const { data } = req.body;
    const userId = await model.createUser(data as any);

    if (!userId) {
      return res.status(400).send({ message: "Something went wrong..." });
    }

    res.send({ results: [userId] });
  };

export const removeUser =
  (model: User) => async (req: Request, res: Response) => {
    const { id } = req.query;

    const userId = await model.removeUserById(id as string);

    if (!userId) {
      return res.status(400).send({ message: "User has not been deleted..." });
    }

    res.send({ results: [userId] });
  };
