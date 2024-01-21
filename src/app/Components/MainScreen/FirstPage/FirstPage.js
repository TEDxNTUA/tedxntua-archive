import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import img1 from "./1.png";
import img2 from "./2.png";
import Image from "next/image";

const FirstPage = (isPhone) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          minHeight: "90vh",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: isPhone.isPhone && "column",
          paddingTop: isPhone.isPhone && "3vh",
        }}
      >
        <Image
          src={img1}
          alt="Picture of the author"
          style={{
            width: isPhone.isPhone ? "65%" : "fit-content",
            height: isPhone.isPhone ? undefined : "50vh", // Only set height if isPhone is true\
            paddingLeft: !isPhone.isPhone && "10vw",
          }}
        />

        <Image
          src={img2}
          alt="Picture of the author"
          style={{
            width: isPhone.isPhone ? "100%" : "fit-content",
            height: isPhone.isPhone ? undefined : "90vh", // Only set height if isPhone is true
          }}
        />
      </Box>
    </div>
  );
};

export default FirstPage;
