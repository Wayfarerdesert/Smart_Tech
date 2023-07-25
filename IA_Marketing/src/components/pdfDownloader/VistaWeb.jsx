import React from "react";

const VistaWeb = ({ graphics }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Mis Graficos
      </h1>
      <img/>
      <p>
        {lorem}
      </p>
      <br />
      <p style={{ maxWidth: "50ch" }}>{graphics ? graphics.content : null}</p>
    </div>
  );
};

export default VistaWeb;