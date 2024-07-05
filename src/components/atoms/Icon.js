import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Picker from "@emoji-mart/react";
import useNote from "../../hooks/useNote";

const Icon = ({ icon, noteId, selectedNote }) => {
  const [selectedIcon, setSelectedIcon] = useState();
  const [isShow, setIsShow] = useState(false);

  const { updateNote } = useNote();

  useEffect(() => {
    setSelectedIcon(icon);
  }, [icon]);

  const selectIcon = (e) => {
    updateNote(e, setSelectedIcon, "icon", noteId, selectedNote);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="700" sx={{ cursor: "pointer" }}>
        <span onClick={() => setIsShow(!isShow)}>{selectedIcon}</span>
      </Typography>
      <Box
        sx={{
          display: isShow ? "block" : "none",
          float: "left",
          position: "absolute",
          zIndex: "100",
        }}
      >
        <Picker onEmojiSelect={(e) => selectIcon(e)} />
      </Box>
    </Box>
  );
};

export default Icon;
