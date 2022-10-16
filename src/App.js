import React, { useState } from "react";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sidebar name="1" />
      <div className="App">
        <h1
          style={{
            color: "white",
            backgroundColor: "black",
            boxShadow: "0px 0px 4px black",
            letterSpacing: "24px",
            padding: "20px",
            textShadow: "0px 0px 4px white",
            textTransform: "uppercase",
          }}
        >
          thor the dark world{" "}
        </h1>
        <h4 style={{ textShadow: "0px 0px 4px white" }}>
          Based on sci-fie technology and thunder events around the universe
        </h4>
      </div>
      <Sidebar side="sahil" />
    </div>
  );
}

export default App;
