import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  // if (token) {

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
  // } else {
  //   throw new Error("you must have a token to do this");
  // }
};
