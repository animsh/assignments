import { useState } from "react";

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const onClickHandler = (e) => {
    const color = e.target.dataset["color"];
    setBackgroundColor(color);
  };
  return (
    <div
      style={{
        width: "1080px",
        height: "540px",
        margin: "auto",
        backgroundColor: `${backgroundColor}`,
        position: "relative",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: "8px",
          gap: "8px",
          display: "flex",
          position: "absolute",
          bottom: 1,
        }}
      >
        <button data-color="red" onClick={onClickHandler}>
          red
        </button>
        <button data-color="green" onClick={onClickHandler}>
          green
        </button>
        <button data-color="blue" onClick={onClickHandler}>
          blue
        </button>
        <button data-color="white" onClick={onClickHandler}>
          reset
        </button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
