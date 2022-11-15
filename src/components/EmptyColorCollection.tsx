import React from "react";
import { ReactComponent as BGImg } from "../static/Vector.svg";

interface EmptyColorCollectionProps {
  render: Boolean;
}

export default function EmptyColorCollection(props: EmptyColorCollectionProps) {
  if (props.render) {
    return (
      <div
        className="empty- color-collection-container"
        style={{
          height: "94%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            border: "1px solid #D8D9D9",
            width: "140px",
            height: "140px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <BGImg
            style={{
              height: "50px",
              width: "50px",
            }}
          />
        </div>
        <p
          style={{
            fontSize: "24px",
            lineHeight: "28px",
            fontWeight: "700",
          }}>
          Your color collection is empty!
        </p>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "23px",
          }}>
          Please add your favourite colors to make us happy.
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
}
