import React from "react";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";

import useNote from "../hooks/useNote";

const Home = () => {
  const { createNote, isLoading } = useNote();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingButton
        variant="outlined"
        loading={isLoading}
        onClick={createNote}
      >
        最初のメモを作成
      </LoadingButton>
    </Box>
  );
};

export default Home;
