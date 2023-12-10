import client from "./apiHandlerRandomUser";

export const getUsers = (params) => {
  return client.get("api", { params })
}

