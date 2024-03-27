import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="26px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> Repeat
      </Typography>
      <Typography fontSize={22} lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        mb={4}
        href="#exercises"
        variant="contained"
        color="error"
      >
        Explore Excerises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize={200}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
