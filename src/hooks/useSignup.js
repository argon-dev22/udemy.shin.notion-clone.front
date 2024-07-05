import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getInputValue } from "../utils/getInputValue";
import userApi from "../api/userApi";

const useSignup = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { username, password, confirmPassword } = getInputValue(e, {
      // 値には、inputのname属性を記述（自作関数）
      username: "username",
      password: "password",
      confirmPassword: "confirmPassword",
    });

    const newErrors = validateSignUp(username, password, confirmPassword);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);

      const { data: result } = await userApi.signUp({
        username,
        password,
        confirmPassword,
      });
      console.log(result);
      localStorage.setItem("token", result.token);
      alert(result.message);
      navigate("/");
    } catch ({ data: error }) {
      console.log(error);
      const newErrors = handleSignUpError(error);
      setErrors(newErrors);
    } finally {
      setIsLoading(false);
    }
  };

  const validateSignUp = (username, password, confirmPassword) => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "名前を入力してください";
    }
    if (!password) {
      newErrors.password = "パスワードを入力してください";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "確認用パスワードを入力してください";
    } else {
      if (password !== confirmPassword) {
        newErrors.confirmPassword = "パスワードと確認用パスワードが異なります";
      }
    }
    return newErrors;
  };

  const handleSignUpError = (error) => {
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
      newErrors.username = error.message;
    }
    return newErrors;
  };

  return { handleSignUp, errors, isLoading };
};

export default useSignup;
