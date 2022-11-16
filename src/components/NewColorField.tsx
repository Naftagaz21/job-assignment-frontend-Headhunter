import React, { useState } from "react";
import { Color } from "./MyFavouriteColors";
import { ReactComponent as LoveIcon } from "../static/Love.svg";
import "./styles.css";

interface NewColorFieldProps {
  onAdd: () => void;
  itemData: Color[];
}

export default function NewColorField(props: NewColorFieldProps) {
  const [title, setTitle] = useState("");
  const [colorhex, setColorHex] = useState("#8F00FF");

  const checkTitleAndColorCode = (title: String, colorCode: String) => {
    if (props.itemData === null) {
      return true;
    }

    for (let i = 0; i < props.itemData.length; i++) {
      const item = props.itemData[i];
      if (title === item.title) {
        alert("Color name already exists in favourite colors!");
        return false;
      } else if (colorCode === item.colorhex) {
        alert("Color already exists in favourite colors!");
        return false;
      }
    }

    return true;
  };

  const addColor = async (jsonData: BodyInit) => {
    const response = await fetch(
      "https://gin-production-52a3.up.railway.app/insert",
      {
        method: "POST",
        mode: "cors",
        body: jsonData,
      }
    );

    if (response.ok) {
      props.onAdd();
      return;
    }

    let res = await response.json();

    if (Object.keys(res).length === 0 && !response.ok) {
      alert("Error occured when adding color to database!");
      return;
    } else if (Object.keys(res).length > 0) {
      if (res.message === "Duplicate color name") {
        alert("Duplicate color name!");
        return;
      } else if (res.message === "Duplicate color code") {
        alert("Duplicate color code!");
        return;
      }
    }
  };

  const addColorClick = () => {
    if (title === "") {
      alert("Color name must be specified!");
      return;
    } else if (title.length > 25) {
      alert("Color name is too long!");
      return;
    }
    if (checkTitleAndColorCode(title, colorhex)) {
      const jsonData = JSON.stringify({
        title,
        colorhex,
      });
      addColor(jsonData);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleColorHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorHex(event.target.value);
  };

  return (
    <div className="color-add-container">
      <div className="color-add" style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "5fr 1fr",
          }}>
          <div
            style={{
              display: "inline-flex",
              width: "92%",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: "14px",
              border: "1px solid #EBECEC",
            }}>
            <LoveIcon />
            <input
              type="text"
              placeholder="Color name"
              onChange={handleTitleChange}
              style={{
                marginLeft: "6px",
                height: "50px",
                width: "380px",
                border: "none",
                outline: "none",
              }}></input>
            <input
              type="color"
              value={colorhex}
              onChange={handleColorHexChange}
              style={{
                width: "36px",
                height: "36px",
                border: "none",
                padding: 0,
                outline: "none",
                margin: 0,
                flexShrink: 0,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <button
              onClick={addColorClick}
              style={{
                width: "52px",
                height: "52px",
                background: "#3C4043",
                border: "none",
                color: "white",
                fontSize: "24px",
                flexShrink: 0,
              }}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
