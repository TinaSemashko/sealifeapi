export const AdminAPIKey = process.env.REACT_APP_ADMIN_API_KEY?.replace(
  /['"]+/g,
  ""
).replace(";", "");
