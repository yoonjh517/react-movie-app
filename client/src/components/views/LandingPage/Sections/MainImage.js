import React from "react";

function MainImage(props) {
  return (
    <div
      style={{
        backgroundColor: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%)`,
        backgroundImage: `url('${props.image}')`,
        height: "600px",
        backgroundSize: "100%",
        backgroundSize: "cover",
        backgroundPosition: "top, center",
        width: "100%",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}>{props.title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
