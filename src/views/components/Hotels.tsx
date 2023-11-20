import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seachbar2 from "./Seachbar2";
import Footer from "./Footer";
import HomeBody from "./HomeBody";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Hotels() {
  const [hotels] = useState([
    {
      name: "Hotel mountain face by snow",
      price: "8000/-",
      rating: "excellent",
      src: "pic1.jpg",
    },
    {
      name: "Bentewood Resort",
      price: "2000/-",
      rating: "excellent",
      src: "pic2.jpg",
    },
    {
      name: "JW Marriot Mumbai Sahar",
      price: "3000/-",
      rating: "excellent",
      src: "pic3.jpg",
    },
    {
      name: "Niranta Transit",
      price: "5000/-",
      rating: "excellent",
      src: "pic4.jpg",
    },
    {
      name: "Hotel Kohinoor Continental",
      price: "9000/-",
      rating: "excellent",
      src: "pic5.jpg",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(hotels);

  const filterData = (searchTerm: any) => {
    const filteredData = hotels.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <Typography sx={{ ml: 20 }}>
        <Link to="/">
          <Logo />
        </Link>
      </Typography>

      <Seachbar2
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterData={filterData}
      />
      <Box sx={{ padding: 2, mt: 4, marginLeft: "350px" }}>
        {filteredData.map((item, i) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "75%",
              margin: "10px",
              border: "1px solid lightgray",
              borderRadius: "20px",
              marginBottom: "30px",
            }}
          >
            <img
              src={require(`./${item.src}`)}
              alt="hotel pic"
              style={{
                width: "300px",
                height: "250px",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "30px",
                width: "500px",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", fontSize: "25px", opacity: 0.8 }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  opacity: 0.5,
                  marginTop: "10px",
                }}
              >
                Hotel
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  opacity: 0.5,
                  marginTop: "5px",
                }}
              >
                {item.rating}
              </Typography>
            </Box>

            <Box
              sx={{
                margin: "20px",
                marginLeft: "50px",
                border: "1px solid lightgray",
                width: "300px",
                height: "80px",
                borderRadius: "20px",
                backgroundColor: "rgba(241,248,234)",
                padding: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "90px",
                  border: "1px solid red",
                  ml: 22,
                  height: "25px",
                  borderRadius: "15px",
                  color: "red",
                  fontSize: "10px",
                  padding: 1,
                  fontWeight: "bold",
                }}
              >
                Our Lowest Price
              </Box>

              <Box
                sx={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "8px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <DoneIcon sx={{ fontSize: "15px", fontWeight: "bold" }} />{" "}
                <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                  Free Cancelation
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", opacity: 0.7 }}
                >
                  ₹{item.price}
                </Typography>
                <Button
                  sx={{
                    width: "140px",
                    backgroundColor: "green",
                    height: "35px",
                    color: "white",
                    fontWeight: "bold",
                    marginLeft: "120px",
                    marginTop: "-9px",
                    textTransform: "none",
                  }}
                >
                  View Deal <KeyboardArrowRightIcon />
                </Button>
              </Box>
            </Box>
          </Box>

          // <img src={require(`./${item.src}`)} alt="hotel pic" style={{width:"250px", height:"200px", margin:"10px"}}/>
        ))}
      </Box>
      <Footer />
    </>
  );
}

export default Hotels;
