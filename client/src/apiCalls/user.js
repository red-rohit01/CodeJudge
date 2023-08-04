import axios from "axios";
export const register = async (user) => {
  try {
    const response = await axios.post("/api/users/signup", user);
    return response.data;
  } catch (error) {
    if ("response" in error && "data" in error.response)
      return error.response.data;
    return error;
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post("/api/users/login", user);
    return response.data;
  } catch (error) {
    if ("response" in error && "data" in error.response)
      return error.response.data;
    return error;
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get("/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if ("response" in error && "data" in error.response)     //This line checks if the error object contains both a response property and a data property within the response object
      return error.response.data;                           // In many HTTP request libraries, the error object may contain a response object with additional information about the error, such as the HTTP status code and any response data provided by the server.
    return error;
  }
};
