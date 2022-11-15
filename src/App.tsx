import React from "react";
import "./App.css";
import MyFavouriteColors from "./components/MyFavouriteColors";

function App() {
  return (
    <div
      className="app-container"
      style={{
        height: "100vh",
        widows: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
      }}>
      <div
        className="main-container"
        style={{
          width: "640px",
          height: "750px",
          background: "white",
        }}>
        <div className="title">
          <p
            style={{
              fontWeight: "700",
              fontSize: "28px",
              lineHeight: "34px",
              marginLeft: "20px",
            }}>
            My Favourite Colors
          </p>
        </div>
        <MyFavouriteColors />
      </div>
    </div>
  );
}

export default App;
