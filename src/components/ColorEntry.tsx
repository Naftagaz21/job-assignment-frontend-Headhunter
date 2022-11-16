import React from "react";
import { Color } from "./MyFavouriteColors";

interface ColorEntryProps {
  entry: Color;
  onDelete: () => void;
}

export default function ColorEntry(props: ColorEntryProps) {
  const removeColor = async (jsonData: BodyInit) => {
    const response = await fetch(
      "https://gin-production-52a3.up.railway.app/delete",
      {
        method: "POST",
        mode: "cors",
        body: jsonData,
      }
    );

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
          width: "250px",
          height: "36px",
          fontFamily: "Montserrat",
          fontSize: "18px",
        }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            background: props.entry.colorhex,
          }}
        />
        <p
          className="color-entry-name"
          style={{
            height: "24px",
            width: "200px",
            overflow: "auto",
          }}>
          {props.entry.title}
        </p>
      </div>
      <button
        onClick={removeColorClick}
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          gap: "10px",
          border: "1px solid #EBECEC",
          background: "white",
          fontSize: "15px",
        }}>
        Remove color
      </button>
    </div>
  );
}
