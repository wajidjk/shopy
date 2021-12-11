import React, { useState, useContext } from "react";
import { CustomButton } from "../components/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Autocomplete, Input, InputAdornment, TextField } from "@mui/material";
import "./addProduct.scss";
import { appContext } from "../store/ui";
import { nanoid } from "nanoid";

export default function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useSearchParams();
  console.log(search.get("id"));
  const { state, setState } = useContext(appContext);

  const navigate = useNavigate();

  const onClick = () => {
    const product = { name, price, id: nanoid() };
    setState([...state, product]);
    navigate("/products");
  };

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handlePriceChange(evt) {
    setPrice(evt.target.value);
  }
  console.log(name, price);

  console.log(state);

  return (
    <div>
      <div className="addProduct-header">
        <div>
          <CustomButton text={"Cancel "} onClick={onClick} />
        </div>
        <div></div>
        <div>
          <CustomButton text={"Done "} onClick={onClick} />
        </div>
      </div>
      <div>
        <TextField
          name="Product Name"
          value={name}
          onChange={handleNameChange}
          label="Product Name"
        />
        <br />
      </div>
      <div>
        <TextField
          name="Price"
          value={price}
          onChange={handlePriceChange}
          label="Price"
        />
        <br />
      </div>
    </div>
  );
}
