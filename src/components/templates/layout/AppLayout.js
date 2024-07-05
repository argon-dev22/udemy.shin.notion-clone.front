import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "../../organisms/Sidebar";
import useVerifyUser from "../../../hooks/useVerifyUser";

const AppLayout = () => {
  const { verifyUserAndTransitionToLoginIfNotVerify } = useVerifyUser();

  useEffect(() => {
    verifyUserAndTransitionToLoginIfNotVerify();
  }, [verifyUserAndTransitionToLoginIfNotVerify]);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
