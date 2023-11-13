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

export const getBateauByModel =
  (model: Bateau) => async (req: Request, res: Response) => {
    const modelBateaux = req.query.data;

    const bateau = await model.getBateauByModel(modelBateaux as string);

    if (!bateau) {
      return res.status(404).send({ message: "Bateaux doesn't existe" });
    }

    res.send({ results: [bateau] });
  };

export const getBateauByType =
  (model: Bateau) => async (req: Request, res: Response) => {
    const type = req.query.data;

    const bateau = await model.getBateauByTypeModel(type as string);

    if (!bateau) {
      return res.status(404).send({ message: "No bateaux founded" });
    }

    res.send({ results: [bateau] });
  };
