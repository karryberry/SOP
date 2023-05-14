import './components/css/App.css';
import React, { Fragment, useState } from "react";
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
//Sign In
import SignIn from './components/SignIn/SignIn';
import GeneralHomeTable from './components/GeneralHome/Table';
import AdminHomeTable from './components/AdminHome/Table';
import JobRoleTable from './components/JobRoles/JobRoleTable';
import UserTable from './components/Users/UserTable';
import SOPJBTable from './components/Relate/SOP-JobRole';
import UserJBTable from './components/Relate/User-JobRole';

function App() {

  //show/hide navbar
  const [authenticated, setAuthenticated] = useState(false)

  function handleAuthenticateTrue() {
    setAuthenticated(true)
  }

  function handleAuthenticateFalse() {
    setAuthenticated(false)
  }

  return (
    <Fragment>
      {authenticated && <Navbar onClick={handleAuthenticateFalse}/>}
        <Routes>
          {!authenticated && <Route path="/" element={<SignIn onClick={handleAuthenticateTrue}/>} />}
          <Route path="/" element={<GeneralHomeTable/>}/>
          <Route path="/SOPs" element={<AdminHomeTable/>}/>
          <Route path="/JobRoles" element={<JobRoleTable/>}/>
          <Route path="/Users" element={<UserTable/>}/>
          <Route path="/SOPJB" element={<SOPJBTable/>}/>
          <Route path="/UserJB" element={<UserJBTable/>}/>
      </Routes>
      {/* <footer className="footer"> </footer> */}
    </Fragment>

  )
}
export default App;
