import Home from "./pages/home/home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/post/post";
import Addarticle from "./pages/addarticle/addarticle";
import './App.css';
import Login from "./pages/login/login";
import Protected from "./components/Protected";
import  {HashLink as Link}from "react-router-hash-link"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/post">
            <Route index element={<Post />} />
          </Route>
          <Route path="/add">
            <Route index element={<Protected Cmp={Addarticle }/>}  />
          </Route>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>

          
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;
