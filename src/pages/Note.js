import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, IconButton, TextField } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useParams } from "react-router-dom";

import useFirstTwoChangesEffect from "../hooks/useFirstTwoChangesEffect";
import useNote from "../hooks/useNote";
import Icon from "../components/atoms/Icon";

const Note = () => {
  const notes = useSelector((state) => state.note.value);
  const { noteId } = useParams();
  const selectedNote = notes.find((note) => noteId === note._id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { updateNote, deleteNote } = useNote();

  useFirstTwoChangesEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setDescription(selectedNote.description);
    }
  }, [selectedNote]);

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setDescription(selectedNote.description);
    }
  }, [noteId]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton
          variant="outlined"
          color="error"
          onClick={() => deleteNote(noteId)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: "10px 50px" }}>
        <Box>
          <Icon
            icon={selectedNote?.icon}
            noteId={noteId}
            selectedNote={selectedNote}
          />
          <TextField
            onChange={(e) =>
              updateNote(e, setTitle, "title", noteId, selectedNote)
            }
            placeholder="無題"
            value={title}
            variant="outlined"
            fullWidth
            sx={{
              ".MuiOutlinedInput-input": { padding: 0 },
              ".MuiOutlinedInput-notchedOutline": { border: "none" },
              ".MuiOutlinedInput-root": { fontSize: "2rem", fontWeight: "700" },
            }}
          ></TextField>
          <TextField
            onChange={(e) =>
              updateNote(e, setDescription, "description", noteId, selectedNote)
            }
            value={description}
            placeholder="新規ノート"
            variant="outlined"
            fullWidth
            sx={{
              ".MuiOutlinedInput-input": { padding: 0 },
              ".MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          ></TextField>
        </Box>
      </Box>
    </>
  );
};

export default Note;
