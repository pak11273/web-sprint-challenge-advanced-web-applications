import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
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
