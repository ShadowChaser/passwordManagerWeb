import React, { useState } from "react";
import HomePage from "./page/HomePage";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { ToastContainer } from 'react-bootstrap';
import {UserContext} from './context/UserContext';
import PagenotFound from "./components/Pagenotfound";

function App() {
  const [user,setUser]=useState(null);
  return (
    <Router>
      <ToastContainer/>
        <UserContext.Provider value={{user,setUser}}>
          <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/home" element={<HomePage/>} />
              <Route exact path="*" element={<PagenotFound/>}/>
          </Routes>
        </UserContext.Provider> 
    </Router>
      
  );
}

export default App;
