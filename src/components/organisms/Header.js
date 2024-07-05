import React from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="notion-logo.png"
          style={{ width: 100, margin: 100, marginBottom: 3 }}
        />
        Notion
      </Box>
    </Container>
  );
};

export default Header;
