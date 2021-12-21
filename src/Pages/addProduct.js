import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../components/card";
import "./addProduct.scss";
import { appContext } from "../store/ui";
import axios from "axios";

export default function AddProduct(props) {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const [eccodedImage, setEncodedImage] = useState();

  const [state, setState] = useState({
    image: null,
    name: "",
    description: "",
    price: 0,
  });

  useEffect(() => {
    (async () => {
      const id = query.get("id");
      const response = await axios.get(
        "http://localhost:8000/api/product/" + id
      );
      const { image, price, description, name } = response.data.product;

      console.log({
        product: response.data.product,
      });

      setEncodedImage("http://localhost:8000/" + image);
      setState((prev) => ({ ...prev, price, description, name }));
    })();
  }, []);

  const onSubmit = async () => {
    try {
      const id = query.get("id");
      console.log(state);
      const form = new FormData();
      form.set("image", state.image);

      if (id) {
        let file = eccodedImage;
        if (state.image) {
          console.log("inside image");
          const imageResponse = await axios.post(
            "http://localhost:8000/api/upload/",
            form
          );
          file = imageResponse.data.path;
        }

        console.log({ file });

        const response = await axios.put(
          "http://localhost:8000/api/product/" + id,
          {
            ...state,
            image: file.replace("http://localhost:8000/", ""),
          }
        );

        console.log(response);
      } else {
        const res = await axios.post("http://localhost:8000/api/upload/", form);
        await axios.post("http://localhost:8000/api/product/", {
          ...state,
          image: res.data.path,
        });
      }

      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const { image } = state;

    if (state.image) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(image);

      console.log(fileReader);

      fileReader.onloadend = () => {
        setEncodedImage(fileReader.result);
      };

      fileReader.onerror = () => {
        console.log("error reading file");
      };
    } else {
      setEncodedImage(null);
    }
  }, [state.image]);

  return (
    <div className="parent">
      <Card
        value={state}
        setValue={setState}
        eccodedImage={eccodedImage}
        onSubmit={onSubmit}
        edit
      />
    </div>
  );
}
