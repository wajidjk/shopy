import React, { useState, useContext } from "react";
import { CustomButton } from "../components/button";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { appContext } from "../store/ui";
import { Box } from "@mui/system";

export default function ProductDetail(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { state, setState } = useContext(appContext);

  const onClickEdit = () => {
    navigate("/addProduct?id=" + params.id);
  };
  const onClickProduct = () => {
    navigate("/products");
  };

  const product = state.find((value) => {
    return value.id == params.id;
  });
  console.log("ye mera ha", product);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div>
      <div className="addProduct-header">
        <div>
          <CustomButton text={"Products"} onClick={onClickProduct} />
        </div>
        <div></div>
        <div>
          <CustomButton text={"Edit "} onClick={onClickEdit} />
        </div>
      </div>
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {product.name}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {product.price}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
