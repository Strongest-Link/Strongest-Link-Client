import React from 'react'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom"; // This is version 6
import { Quiz } from "./pages";

const App = () => {


  return (
      
    <BrowserRouter>
    <Routes>
    <Route path="/quiz" element={<Quiz />}></Route>
    </Routes>
  </BrowserRouter>
  );
};


export default App;
