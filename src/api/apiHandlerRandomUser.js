import axios from "axios";
import queryString from "qs";

const client = axios.create({
  baseURL: "https://randomuser.me/",
  headers: {
    Accept: 'application/json'
  }
})

client.interceptors.request.use(
  function (config) {
    config.paramsSerializer = (params) => {
      return queryString.stringify(params, { indices: false })
    }
    return config
  },

  function (error) {
    return Promise.reject(error)
  }
)

client.interceptors.response.use(
  function (response) {
    return response
  },

  function (error) {
    return Promise.reject(error)
  }
)

export default client;