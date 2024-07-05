import axiosClient from "../config/axios";

const noteApi = {
  createNote: () => axiosClient.post("/note"),
  fetchAllNotes: () => axiosClient.get("/note"),
  updateNote: (noteId, data) => axiosClient.put(`/note/${noteId}`, data),
  deleteNote: (noteId) => axiosClient.delete(`/note/${noteId}`),
};

export default noteApi;
