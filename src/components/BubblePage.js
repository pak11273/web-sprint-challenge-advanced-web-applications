import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    console.log(axiosWithAuth);
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Bubble Page</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
