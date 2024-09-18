import React, { useState } from "react";
import Drawer from "./Drawer";
import DrawerTop from "./DrawerTop";

const DrawerPages = () => {
  const [onOpen, setOnOpen] = useState(false);
  const [onOpenTop, setOnOpenTop] = useState(false);
  const onClose = (val) => {
    setOnOpen(val);
  };

  const onCloseTop = (val) => {
    setOnOpenTop(val);
  };
  return (
    <>
      <div className="flex items-center justify-center  w-screen h-screen bg-red-100 ">
        <div className="flex items-center justify-center rounded gap-4 w-[30rem] h-[5rem] bg-blue-300">
          <button
            onClick={() => setOnOpen(true)}
            className="bg-green-400 w-[10rem] h-[2rem] rounded"
          >
            Open Drawer Right
          </button>
          <button
            className="bg-green-400 w-[10rem] h-[2rem] rounded"
            onClick={() => setOnOpenTop(true)}
          >
            Open Drawer Top
          </button>
        </div>

        <Drawer isOpen={onOpen} onClose={onClose} />
        <DrawerTop isOpen={onOpenTop} onClose={onCloseTop} />
      </div>
    </>
  );
};

export default DrawerPages;
