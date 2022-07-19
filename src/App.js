import React from 'react';
import { Route,Routes,Navigate } from "react-router-dom";
import SignupForm from "./Components/SignupForm";
import Login from "./Components/Login";
import "./App.css"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<Navigate to="/signup" />}/>
      </Routes>
    </div>
  );
};

export default App;
