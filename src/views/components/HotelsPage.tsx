import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SimpleMap from "./Map";
import Footer from "./Footer";
import Seachbar2 from "./Seachbar2";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Hotels from "./Hotels";
import useAuth from "../../Hooks/useAuth/useAuth";
const HotelsPage = () => {

  const { request } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
  // useEffect(() => {
  //   getHotels();
  // }, []);
  useMemo(async() => {
    const result = await request.get("/getHotels");
    setFilteredData(result.data);
  }, []);

  const filterData = async(searchTerm: any) => {
    const result = await request.get("/getHotels",{
      params:{
        search:searchTerm    
        }
    });
   
    setFilteredData(result.data);
  };

  useEffect(() => {
    const handleWindowSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
  });

  return (
    <>
      <Stack direction={screenSize < 1024 ? "column" : "row"} mt={2}>
        <IconButton>
          <Link to="/">
            <Logo />
          </Link>
        </IconButton>
        <Seachbar2
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterData={filterData}
        />
      </Stack>
      <Stack direction={"row"} sx={{ m: { md: 2, xl: 5, sm: 3 } }}>
        {filteredData.length!==0 ? <>  {filteredData !== undefined ? (
          <Hotels filteredData={filteredData} screenSize={screenSize} />
        ) : null}
        {screenSize <= 768 ? <></> : <SimpleMap filteredData={filteredData} />}</> : 
         <Box
          component="img"
          sx={{
            ml:{xl:'25%',md:'12%',sm:'12%'},
         
          }}
          alt="The house from the offer."
          src={require("../components/no_result.gif")}
        /> }
      
      </Stack>
      <Footer />
    </>
  );
};

export default HotelsPage;
