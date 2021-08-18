import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "./Navigation.css";

/** Navigation: renders navigation bar
 *    props:
 *      - logout: parent function
 * 
 *    context:
 *      - UserContext Provider: {currentUser, setCurrentUser}
 *          where currentUser = { username, isAdmin, iat }
 * 
 *    App -> Navigation
 */

function Navigation({ logout }) {
  const {currentUser} = useContext(UserContext);

  if (!currentUser.username) {
    return (
      <div className="Navigation">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <div className="Navigation">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/companies">
          Companies
        </NavLink>
        <NavLink exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
