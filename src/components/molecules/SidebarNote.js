import React from "react";
import { ListItemButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarNote = ({ children, to, noteId, selectedNoteId }) => {
  return (
    <ListItemButton
      sx={{ pl: "20px" }}
      component={Link}
      to={to}
      selected={noteId === selectedNoteId}
    >
      <Typography>{children}</Typography>
    </ListItemButton>
  );
};

export default SidebarNote;
