"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttonSx = {
    color: "white",
    fontFamily: "Helvetica, Arial, sans-serif",
    margin: isMobile ? "10px 0" : "0 20px", // Adjusted margin for small screens
    display: isMobile ? "block" : "inline-block", // Display buttons as blocks on mobile, inline-block on large screens
  };

  const transparentDrawer = {
    background: "black", // Set the background color to transparent
    color: "white",
    padding: "20px",
    height: "100%",
  };

  const navLinks = (
    <div>
      <Link href="/" passHref>
        <Button sx={buttonSx}>Archive</Button>
      </Link>
      <Link href="/watch" passHref>
        <Button sx={buttonSx}>Watch</Button>
      </Link>
      <Link href="/blog" passHref>
        <Button sx={buttonSx}>Let's Blog</Button>
      </Link>
      <Link href="/about" passHref>
        <Button sx={buttonSx}>About</Button>
      </Link>
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/" passHref>
              <img
                src="https://github.com/TEDxNTUA/tedxntua2022/blob/main/project/static/images/tedxntua_logo_whitetext.png?raw=true"
                alt="TEDxNTUA Logo"
                style={{ height: "50px", marginRight: "10px" }}
              />
            </Link>
            {!isMobile && (
              <Typography
                variant="h8"
                sx={{ color: "white", margin: "0 10px" }}
              >
                Ideas Worth Spreading
              </Typography>
            )}
          </div>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end" // Position the drawer on the right side
              onClick={() => setDrawerOpen(true)}
            >
              <ReceiptIcon />
            </IconButton>
          ) : (
            <div>{navLinks}</div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right" // Position the drawer on the right side
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={transparentDrawer} // Apply transparent style to the drawer
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          {navLinks}
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
