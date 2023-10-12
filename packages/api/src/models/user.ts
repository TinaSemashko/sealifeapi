import humps from "humps";
import { knex } from "../../db";
import { User } from "./types/user";

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
    return results[0] as User;
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

export const getAdmin = async (api_key: string) => {
  const results = await knex<User>(table).select("*").where({ api_key });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const putUserById = async (id: string, data: User) => {
  const existingUser = await knex<User>(table)
    .select("*")
    .where({ id })
    .first();

  if (!existingUser) {
    return null;
  }
  const updatedFields: Partial<User> = {};

  if (data.email !== existingUser.email && data.email !== "") {
    updatedFields.email = data.email;
  }

  if (data.api_key !== existingUser.api_key && data.api_key !== "") {
    updatedFields.api_key = data.api_key;
  }

  if (Object.keys(updatedFields).length === 0) {
    return null;
  }

  const results = await knex<User>(table)
    .update(updatedFields)
    .where({ id })
    .returning("id");

  if (results) return results[0];

  return null;
};

export const createUser = async (data: User) => {
  const results: number[] = await knex<User>(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};

export const removeUserById = async (id: string) => {
  return knex<number>(table).where("id", id).del();
};
