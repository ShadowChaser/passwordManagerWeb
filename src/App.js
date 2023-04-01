import React, { useState } from "react";
import HomePage from "./page/HomePage";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
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
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="*" element={<PagenotFound/>}/>
          </Routes>
        </UserContext.Provider> 
    </Router>
      
  );
}

export default App;
