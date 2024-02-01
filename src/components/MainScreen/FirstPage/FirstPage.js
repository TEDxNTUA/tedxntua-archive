"use client";
import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import img1 from "./1.png";
import img2 from "./2.png";
import Image from "next/image";
import useTheme from "@mui/material/styles/useTheme";

const FirstPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ paddingTop: "9vh" }}>
      <Box
        sx={{
          display: "flex",
          minHeight: "90vh",
          alignItems: "center",
          justifyContent: isPhone ? "flext-start" : "space-between",
          flexDirection: isPhone && "column",
          paddingTop: isPhone && "3vh",
        }}
      >
        <Image
          src={img1}
          alt="Picture of the author"
          style={{
            width: isPhone ? "65%" : "fit-content",
            height: isPhone ? undefined : "50vh",
            paddingLeft: !isPhone && "10vw",
          }}
        />

        <Image
          src={img2}
          alt="Picture of the author"
          style={{
            paddingTop: isPhone && "10vh",
            width: isPhone ? "100%" : "fit-content",
            height: isPhone ? undefined : "90vh",
          }}
        />
      </Box>
    </div>
  );
};

export default FirstPage;
