// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import TheLayout from "./../containers/TheLayout";
import Dashboard from "./../views/dashboard/Dashboard";
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && Dashboard}
    </div>
  );
};

export default NavBar;
