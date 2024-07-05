import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import noteApi from "../api/noteApi";
import { setNote } from "../redux/noteSlice";

const useNote = () => {
  const notes = useSelector((state) => state.note.value);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNote = async () => {
    try {
      setIsLoading(true);
      const { data: result } = await noteApi.createNote();
      const newNotes = [...notes, result.note];
      dispatch(setNote(newNotes));
      setIsLoading(false);
      navigate(`/note/${result.note._id}`);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchAllNotes = async () => {
    try {
      setIsLoading(true);
      const { data: result } = await noteApi.fetchAllNotes();
      const newNotes = result.notes;
      dispatch(setNote(newNotes));
      setIsLoading(false);
    } catch ({ data: error }) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const updateNote = (e, setState, key, noteId, selectedNote) => {
    const newContents = e.target ? e.target.value : e.native;
    setState(newContents);

    let timer;
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        setIsLoading(true);
        const { data: result } = await noteApi.updateNote(noteId, {
          [key]: newContents,
        });
        const newNotes = notes.map((note) => {
          return note._id === selectedNote._id ? result.note : note;
        });
        dispatch(setNote(newNotes));
        setIsLoading(false);
      } catch ({ data: error }) {
        console.log(error);
        setIsLoading(false);
      }
    }, 500);
  };

  const deleteNote = async (noteId) => {
    try {
      setIsLoading(true);
      await noteApi.deleteNote(noteId);
      const newNotes = notes.filter((note) => note._id !== noteId);
      dispatch(setNote(newNotes));
      setIsLoading(false);
      if (newNotes.length === 0) {
        navigate("/");
      } else {
        navigate(`/note/${newNotes[0]._id}`);
      }
    } catch ({ data: error }) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return { createNote, fetchAllNotes, updateNote, deleteNote, isLoading };
};

export default useNote;
