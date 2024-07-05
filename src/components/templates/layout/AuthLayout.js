import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../organisms/Header";
import useVerifyUser from "../../../hooks/useVerifyUser";

const AuthLayout = () => {
  const { verifyUserAndTransitionToHome } = useVerifyUser();

  useEffect(() => {
    verifyUserAndTransitionToHome();
  }, [verifyUserAndTransitionToHome]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
