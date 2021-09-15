import React from "react";
import AuthContext from "../../Store/auth-context";
import { useContext } from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    // <nav className={classes.nav}>
    //   <ul>
    //     {props.isLoggedIn && (
    //       <li>
    //         <a href="/">Users</a>
    //       </li>
    //     )}
    //     {props.isLoggedIn && (
    //       <li>
    //         <a href="/">Admin</a>
    //       </li>
    //     )}
    //     {props.isLoggedIn && (
    //       <li>
    //         <button onClick={props.onLogout}>Logout</button>
    //       </li>
    //     )}
    //   </ul>
    // </nav>

    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>

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
