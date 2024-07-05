import axiosClient from "../config/axios";

const userApi = {
  signUp: (data) => axiosClient.post("/user", data),
  login: (data) => axiosClient.post("/user/login", data),
  verifyAndRetrieveUser: () => axiosClient.post("/user/verify"),
};

export default userApi;
