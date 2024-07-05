import React from "react";
import { Box, IconButton, ListItemButton, Typography } from "@mui/material";

const SidebarButton = ({ children, Component, onClick }) => {
  return (
    <ListItemButton>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" fontWeight="700">
          {children}
        </Typography>
        <IconButton onClick={onClick}>{Component && <Component />}</IconButton>
      </Box>
    </ListItemButton>
  );
};

export default SidebarButton;
