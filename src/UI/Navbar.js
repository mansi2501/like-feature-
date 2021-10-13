import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink className="links" to="/">
              Posts
            </NavLink>
          </Typography>
          <NavLink className="links" to="/">
            Home
          </NavLink>
          <NavLink className="links" to="/postform">
            Add Post
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
