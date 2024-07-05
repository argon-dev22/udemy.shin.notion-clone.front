import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import UserInputs from "../components/molecules/UserInputs";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const { handleSignUp, errors, isLoading } = useSignup();

  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => handleSignUp(e)}
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
          confirmPassword={{
            confirmPassword: "confirmPassword",
            error: errors?.confirmPassword,
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
          アカウント作成
        </LoadingButton>
        <Button component={Link} to="/login">
          すでにアカウントをお持ちの方はこちら
        </Button>
      </Box>
    </>
  );
};

export default SignUp;
