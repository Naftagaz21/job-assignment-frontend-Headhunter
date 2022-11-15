import React, { useState, useEffect } from "react";
import ColorCollection from "./ColorCollection";
import EmptyColorCollection from "./EmptyColorCollection";
import NewColorField from "./NewColorField";

export interface Color {
  id: string;
  title: string;
  colorhex: string;
}

export default function MyFavouriteColors() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/`);
      if (!response.ok) {
        throw new Error(`An HTTP error occured. Status: ${response.status}`);
      }

      let data = await response.json();
      setData(data);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="app-logic-container"
      style={{
        height: "84%",
      }}>
      <NewColorField onAdd={getData} itemData={data} />
      <ColorCollection itemData={data} setData={getData} />
      <EmptyColorCollection render={data === null || data.length === 0} />
    </div>
  );
}
