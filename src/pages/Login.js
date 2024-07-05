import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import UserInputs from "../components/molecules/UserInputs";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { handleLogin, errors, isLoading } = useLogin();

  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => handleLogin(e)}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserInputs
          username={{
            username: "username",
            error: errors?.username,
            isLoading,
          }}
          password={{
            password: "password",
            error: errors?.password,
            isLoading,
          }}
        />

        <LoadingButton
          type="submit"
          sx={{ mt: 1, mb: 2 }}
          color="primary"
          loading={isLoading}
          variant="outlined"
        >
          ログイン
        </LoadingButton>
        <Button component={Link} to="/signup">
          アカウントをお持ちでない方はこちら
        </Button>
      </Box>
    </>
  );
};

export default Login;
