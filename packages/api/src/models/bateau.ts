import { knex } from "../../db";
import { Bateau } from "./types/bateau";

export const table = "models";

export const getBateaux = async () => {
  const results = await knex<Bateau>(table).select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getBateauByModel = async (model: string) => {
  const results = await knex<Bateau>(table).select("*").where({ model });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const getBateauByTypeModel = async (
  id_type: string = "",
  model: string = ""
) => {
  const query = knex<Bateau>(table).select("*");
  if (id_type) {
    query.where("id_type", id_type);
  } else if (model) {
    query.where("model", "like", `%${model}%`);
  }

  const results = await query;

  if (results && results.length) {
    return results;
  }

  return null;
};
