import axios from "axios";

// インスタンス生成
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ORIGIN,
});

const getToken = () => localStorage.getItem("token");

// リクエストの前処理
axiosClient.interceptors.request.use(async (config) => ({
  ...config,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${getToken()}`,
  },
}));

// レスポンスの前処理
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error.response;
  }
);

export default axiosClient;
