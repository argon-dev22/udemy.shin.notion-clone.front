import React from "react";
import { TextField } from "@mui/material";

const UserInput = ({ value, error, isLoading }) => {
  const password = value.includes("word") ? "password" : "text";

  return (
    <TextField
      id={value}
      name={value}
      label={value}
      margin="normal"
      sx={{ width: 300 }}
      helperText={error}
      error={error !== undefined} // {}の中がtrueの時に、エラースタイルが当たる
      type={password}
      disabled={isLoading}
      required
    />
  );
};

export default UserInput;
