import React, { useState } from "react";

const Emoji = (props) => {
  const [hoverLine, setHoverLine] = useState("");
  return (
    <>
      <div
        onMouseEnter={() => {
          setHoverLine(true);
        }}
        onMouseLeave={() => {
          setHoverLine(false);
        }}
        onClick={() => {
          navigator.clipboard.writeText(props.symbol);
        }}
        className={hoverLine === true ? "emoji-box-hover" : "emoji-box"}
      >
        <span className="symbol">{props.symbol}</span>
        <span>{props.title}</span>
        {hoverLine && <span className="copy-emoji">Click to copy !</span>}
      </div>
    </>
  );
};

export default Emoji;
