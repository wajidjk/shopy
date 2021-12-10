import React from "react";
import Button from "@mui/material/Button";

export function CustomButton(props) {
  return (
    <div>
      <Button onClick={props.onClick}>{props.text}</Button>
    </div>
  );
}
