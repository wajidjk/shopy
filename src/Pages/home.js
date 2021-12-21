import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/button";
import { Autocomplete, Input, InputAdornment, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";

import "./home.scss";
function Home(props) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/products");
    console.log("hi");
  };

  const myProducts = [
    { name: "Bomber Jacket", price: "300 Kr" },
    { name: "Polo shirt", price: "200 Kr" },
    { name: "Levis Jeans", price: "3000 Kr" },
    { name: "Belt", price: "100 Kr" },
  ];

  return (
    <div>
      <div className="header-container">
        <CustomButton text={"Admin"} onClick={onClick} />
      </div>
      <div>
        <Typography variant="h2" component="div" gutterBottom align="center">
          Shopy
        </Typography>
      </div>
      <div>
        <Autocomplete
          freeSolo
          disableClearable
          options={myProducts.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Products"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Home;
