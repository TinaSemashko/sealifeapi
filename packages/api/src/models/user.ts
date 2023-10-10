import humps from "humps";
import { knex } from "../../db";
import { User, UserCamel } from "./types/user";

export const table = "users";

export const getUsers = async () => {
  const results = await knex<User>(table).select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getUser = async (email: string, password: string) => {
  const results = await knex<User>(table)
    .select("*")
    .where({ email, password });

  if (results && results.length) {
    return humps.camelizeKeys(results[0]) as UserCamel;
  }

  return null;
};

export const getUserById = async (id: string) => {
  const results = await knex<User>(table).select("*").where({ id });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const putUserById = async (id: string, data: User) => {
  const results = await knex<User>(table)
    .update({ email: data.email, api_key: data.api_key })
    .where({ id });

  if (results) return results;

  return null;
};

export const createUser = async (data: UserCamel) => {
  const results: number[] = await knex<User>(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};

export const removeUserById = async (id: string) => {
  return knex<number>(table).where("id", id).del();
};
