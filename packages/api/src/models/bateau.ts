import humps from "humps";
import { knex } from "../../db";
import { Bateau, BateauCamel } from "./types/bateau";

export const table = "bateaux";

export const getBateaux = async () => {
  const results = await knex<Bateau>(table).select("*");

  if (results && results.length) {
    return humps.camelizeKeys(results) as BateauCamel[];
  }

  return null;
};
