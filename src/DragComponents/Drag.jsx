import React, { useRef } from "react";
import Draggable from "./Draggable";

const Drag = () => {
  return (
    <>
      <div className="bg-sky-100 flex items-center justify-center">
        <Draggable />
      </div>
    </>
  );
};

export default Drag;
