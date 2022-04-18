import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navibar from "./components/Navibar";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/edit-todo" element={<EditTodo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
