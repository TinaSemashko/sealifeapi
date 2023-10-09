import { Request, Response } from "express";
import * as bateauModel from "../models/bateau";

type Bateau = typeof bateauModel;

export const getALLBateaux =
  (model: Bateau) => async (req: Request, res: Response) => {
    const bateau = await model.getBateaux();

    if (!bateau) {
      return res.status(404).send({ message: "No bateaux" });
    }

    res.send({ results: [bateau] });
  };
