// our DB type
export type User = {
  id: string;
  api_key: string;
  email: string;
  password: string;
};

// our type after we run through Humps
export type UserCamel = {
  id: string;
  apiKey: string;
  email: string;
  password: string;
};
