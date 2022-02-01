import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" />
      </IconButton>

      <img
        src="https://toppng.com/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png"
        alt="tinder logo"
        className="header__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
