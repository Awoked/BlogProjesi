import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import AddBlog from "./Pages/AddBlog/AddBlog";
import { BlogDetail } from "./Pages/Blog/BlogDetail";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginRegister/Login";
import Register from "./Pages/LoginRegister/Register";

function App() {


  return (
    <div className="text-[#292929]">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/createblog" element={<AddBlog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogdetails/:blogid" element={<BlogDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

