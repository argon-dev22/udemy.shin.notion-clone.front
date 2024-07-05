import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../components/templates/layout/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AppLayout from "../components/templates/layout/AppLayout";
import Home from "../pages/Home";
import Note from "../pages/Note";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_REPO_PATH || "/"}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="note/:noteId" element={<Note />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
