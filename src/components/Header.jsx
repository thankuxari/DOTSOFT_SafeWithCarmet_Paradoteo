import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <FontAwesomeIcon className="logo-icon" icon={faShield} />
        <div className="header-logo-text-container">
          <h2>SafeWithCarmen</h2>
          <p>Supervisor Dashboard</p>
        </div>
      </div>
      <div className="header-links-container">
        <div className="header-links-container">
          <NavLink to="/" end>
            Overview
          </NavLink>
          <NavLink to="/worker-history">Εργαζόμενοι</NavLink>
          <NavLink to="/job-analytics">Ρόλοι</NavLink>
          <NavLink to="/sites">Εργοτάξια</NavLink>
          <NavLink to="/incidents">Ατυχήματα</NavLink>
          <NavLink to="/robot">Robot</NavLink>
          <NavLink to="/recommendations">Συστάσεις</NavLink>
        </div>
      </div>
      <div className="header-user-profile">
        <Avatar sx={{ width: 34, height: 34 }}>Ε</Avatar>
        <div className="header-user-profile-text-container">
          <h5>Επόπτης</h5>
          <p>Online</p>
        </div>
      </div>
    </header>
  );
}
