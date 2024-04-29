import React, { useContext } from "react";
import logo from "../img/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

export default function Navbar({ login }) {
  const { setModalOpen } = useContext(LoginContext);

  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return (
        <>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/createPost">Create Post</Link>
          </li>
          <li>
            <Link style={{ marginLeft: "20px" }} to="/MyFollowingPost">My Following</Link>
          </li>
          <li>
            <Link style={{ marginLeft: "20px" }} to="/Newsfeed">News Feed</Link>
          </li>
          <li>
            <Link className="MBtn" style={{ marginLeft: "20px" }} to="/Messages">Messages</Link>
          </li>
          <li>
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>Log Out</button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        </>
      );
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">{loginStatus()}</ul>
    </div>
  );
}
