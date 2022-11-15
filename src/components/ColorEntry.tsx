import React from "react";
import { Color } from "./MyFavouriteColors";

interface ColorEntryProps {
  entry: Color;
  onDelete: () => void;
}

export default function ColorEntry(props: ColorEntryProps) {
  const removeColor = async (jsonData: BodyInit) => {
    const response = await fetch("http://localhost:8080/delete", {
      method: "POST",
      mode: "cors",
      body: jsonData,
    });

    if (response.ok) {
      props.onDelete();
      return;
    } else alert("Error occured when trying to delete color!");
  };

  const removeColorClick = () => {
    const jsonData = JSON.stringify({
      id: props.entry.id,
    });
    removeColor(jsonData);
  };

  return (
    <div
      className="color-entry"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px",
        width: "100%",
        height: "50px",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0px",
          gap: "10px",
          width: "109px",
          height: "36px",
          fontFamily: "Montserrat",
          fontSize: "18px",
        }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            background: props.entry.colorhex,
          }}></div>
        <p className="color-entry-name">{props.entry.title}</p>
      </div>
      <button
        onClick={removeColorClick}
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
          gap: "10px",
          border: "1px solid #EBECEC",
          background: "white",
        }}>
        Remove color
      </button>
    </div>
  );
}
