import { Box } from "@mui/system";
import React from "react";
import Cards from "../combonent/Cards/Cards";
import HomeBanner from "../combonent/Home-banner/Home-banner";
import Solutions from "../combonent/Solutions/Solutions";
import Whatwedo from "../combonent/Whatwedo/Whatwedo";

const Home = () => {
  return (
    <Box>
      <HomeBanner />
      <Cards />
      <Box sx={{ m: "40px 0" }}>
        <Whatwedo />
      </Box>
      <Solutions />
    </Box>
  );
};

export default Home;
