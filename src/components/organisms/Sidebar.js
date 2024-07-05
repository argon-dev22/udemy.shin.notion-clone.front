import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Drawer, List } from "@mui/material";
import SidebarButton from "../molecules/SidebarButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddIcon from "@mui/icons-material/Add";

import assets from "../../assets/index";
import SidebarNote from "../molecules/SidebarNote";
import useNote from "../../hooks/useNote";

const Sidebar = () => {
  const authUser = useSelector((state) => state.user.value);
  const notes = useSelector((state) => state.note.value);
  const { noteId } = useParams();
  const { createNote, fetchAllNotes } = useNote();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <List
        sx={{
          width: 250,
          height: "100vh",
          backgroundColor: assets.colors.secondary,
        }}
      >
        <SidebarButton Component={LogoutOutlinedIcon} onClick={handleLogout}>
          {authUser.username}
        </SidebarButton>
        <Box sx={{ paddingTop: "10px" }} />
        <SidebarButton>お気に入り</SidebarButton>
        <Box sx={{ paddingTop: "10px" }} />
        <SidebarButton Component={AddIcon} onClick={createNote}>
          プライベート
        </SidebarButton>
        {notes.map((note) => (
          <SidebarNote
            key={note._id}
            to={`/note/${note._id}`}
            noteId={note._id}
            selectedNoteId={noteId}
          >
            {note.icon} {note.title || "無題"}
          </SidebarNote>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
