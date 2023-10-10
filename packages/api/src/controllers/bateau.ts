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
    const { modelBateaux } = req.query;

    const bateau = await model.getBateauByModel(modelBateaux as string);

    if (!bateau) {
      return res.status(404).send({ message: "Bateaux doesn't existe" });
    }

    res.send({ results: [bateau] });
  };

export const getBateauByTypeModel =
  (model: Bateau) => async (req: Request, res: Response) => {
    const { id_type, ModelBateau } = req.query;

    const bateau = await model.getBateauByTypeModel(
      id_type as string,
      ModelBateau as string
    );

    if (!bateau) {
      return res.status(404).send({ message: "No bateaux founded" });
    }

    res.send({ results: [bateau] });
  };
