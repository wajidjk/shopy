import React, { useState, useContext } from "react";
import { CustomButton } from "../components/button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Autocomplete, Input, InputAdornment, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { appContext } from "../store/ui";
import "./products.scss";

export default function Products(props) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { state, setState } = useContext(appContext);

  const onClick = () => {
    navigate("/addProduct");
    console.log("hi");
  };

  const handleRowClick = () => {
    navigate("/productDetail");
  };

  const myProducts = [
    { name: "Bomber Jacket", price: "300 Kr" },
    { name: "Polo shirt", price: "200 Kr" },
    { name: "Levis Jeans", price: "3000 Kr" },
    { name: "Belt", price: "100 Kr" },
  ];

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      editable: false,
    },
  ];

  return (
    <div>
      <div className="products-header">
        <div></div>
        <div>
          <Typography variant="h2" component="div" gutterBottom align="center">
            Shopy
          </Typography>
        </div>
        <div>
          <CustomButton text={"Add "} onClick={onClick} />
        </div>
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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={state}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick={true}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
}
