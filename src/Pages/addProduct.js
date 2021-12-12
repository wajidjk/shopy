import React, { useState, useContext, useEffect } from "react";
import { CustomButton } from "../components/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
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

  const onClick = () => {};

  const onDoneClick = () => {
    if (search.get("id")) {
      const _products = [...state];
      const product = _products.find((el) => el.id === search.get("id"));
      product.name = name;
      product.price = price;
      setState(_products);
    } else {
      const product = { name, price, id: nanoid() };
      setState([...state, product]);
    }
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

  useEffect(() => {
    if (search.get("id")) {
      const data = state.find((value) => {
        return value.id == search.get("id");
      });
      setName(data.name);
      setPrice(data.price);
    }
  }, []);

  return (
    <div>
      <div className="addProduct-header">
        <div>
          <CustomButton text={"Cancel "} onClick={onClick} />
        </div>
        <div></div>
        <div>
          <CustomButton text={"Done "} onClick={onDoneClick} />
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
