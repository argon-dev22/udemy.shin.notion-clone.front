import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import userApi from "../api/userApi";
import { setUser } from "../redux/userSlice";

const useVerifyUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyUserAndTransitionToLoginIfNotVerify = async () => {
    try {
      const { data: result } = await userApi.verifyAndRetrieveUser();
      if (result) {
        dispatch(setUser(result.user));
      }
    } catch ({ data: error }) {
      navigate("/login");
      console.log(error);
    }
  };

  const verifyUserAndTransitionToHome = async () => {
    try {
      const { data: result } = await userApi.verifyAndRetrieveUser();
      console.log(result);
      if (result) {
        dispatch(setUser(result.user));
        navigate("/");
      }
    } catch ({ data: error }) {
      console.log(error);
    }
  };

  return {
    verifyUserAndTransitionToHome,
    verifyUserAndTransitionToLoginIfNotVerify,
  };
};

export default useVerifyUser;
