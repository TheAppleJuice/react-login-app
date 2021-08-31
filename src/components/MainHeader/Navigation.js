import { React, useContext } from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  //Manage the state and the context of the navigation. Not use props to manage the state.
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default Navigation;
