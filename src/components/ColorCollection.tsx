import React from "react";
import ColorEntry from "./ColorEntry";
import { Color } from "./MyFavouriteColors";

interface ColorCollectionProps {
  setData: () => void;
  itemData: Color[];
}

export default function ColorCollection(props: ColorCollectionProps) {
  if (props.itemData === null || props.itemData.length === 0) {
    return <div></div>;
  } else {
    return (
      <div
        className="color-collection-container"
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          marginRight: "20px",
        }}>
        <div className="color-collection-title">
          <p
            style={{ fontWeight: "700", fontSize: "18px", lineHeight: "22px" }}>
            Color collection
          </p>
        </div>
        <div className="color-collection">
          {props.itemData !== null &&
            props.itemData.length > 0 &&
            props.itemData.map((item: Color) => (
              <ColorEntry entry={item} onDelete={props.setData} />
            ))}
        </div>
      </div>
    );
  }
}
