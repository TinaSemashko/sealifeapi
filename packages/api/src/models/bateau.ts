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
  const results = await knex<Bateau>(table)
    .select(
      knex.raw("ENCODE(photo, 'base64') as photo"),
      "model",
      "displacement",
      "eng_power",
      "length",
      "id_type",
      "price",
      "speed_max",
      "tankfuelcapacity"
    )
    //.where("model", "like", `%${model}%`);
    .where({ model });

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getBateauByTypeModel = async (type: string) => {
  let id_type = 0;
  if (type == "yacht") id_type = 2;
  if (type == "catamaran") id_type = 1;
  const query = knex<Bateau>(table).select(
    knex.raw("ENCODE(photo, 'base64') as photo"),
    "model",
    "displacement",
    "eng_power",
    "length",
    "id_type",
    "price",
    "speed_max",
    "tankfuelcapacity"
  );
  if (type) {
    query.where("id_type", id_type);
  }

  const results = await query;

  if (results && results.length) {
    return results;
  }

  return null;
};
