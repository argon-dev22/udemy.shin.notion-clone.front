import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getInputValue } from "../utils/getInputValue";
import userApi from "../api/userApi";

const useLogin = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = getInputValue(e, {
      // 値には、inputのname属性を記述（自作関数）
      username: "username",
      password: "password",
    });

    const newErrors = validateLogin(username, password);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);

      const { data: result } = await userApi.login({
        username,
        password,
      });
      localStorage.setItem("token", result.token);
      alert(result.message);
      setIsLoading(false);
      navigate("/");
    } catch ({ data: error }) {
      const newErrors = handleLoginError(error);
      setErrors(newErrors);
      setIsLoading(false);
    }
  };

  const validateLogin = (username, password) => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "名前を入力してください";
    }
    if (!password) {
      newErrors.password = "パスワードを入力してください";
    }
    return newErrors;
  };

  const handleLoginError = (error) => {
    const newErrors = {};
    if (Array.isArray(error.message)) {
      error.message.forEach((err) => {
        if (err.path === "username") {
          newErrors.username = err.msg;
        }
        if (err.path === "password") {
          newErrors.password = err.msg;
        }
        if (err.path === "confirmPassword") {
          newErrors.confirmPassword = err.msg;
        }
      });
    } else {
      if (error.type === "exist") {
        newErrors.username = error.message;
      }
      if (error.type === "match") {
        newErrors.password = error.message;
      }
    }
    return newErrors;
  };

  return { handleLogin, errors, isLoading };
};

export default useLogin;
