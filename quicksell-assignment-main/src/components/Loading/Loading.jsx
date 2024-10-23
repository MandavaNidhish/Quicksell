import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Circles
        height="100"
        width="100"
        color="lightblue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />{" "}
      <span
        style={{
          color: "lightblue",
          fontWeight: "bolder",
          letterSpacing: "2px",
        }}
      >
       Please wait a momemnt
      </span>
    </div>
  );
};

export default Loading;
