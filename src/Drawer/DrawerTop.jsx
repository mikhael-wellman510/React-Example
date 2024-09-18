import React from "react";

const DrawerTop = ({ isOpen, onClose }) => {
  console.log("Is Open Top masuk : ", isOpen);

  return (
    <>
      <div
        className={`z-10 fixed inset-0 h-[5rem] w-screen bg-gray-100 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <p>Drawer Top</p>
      </div>
      {isOpen && (
        <div
          onClick={() => onClose(false)}
          className="fixed inset-0 bg-opacity-80 h-screen w-screen bg-black"
        ></div>
      )}
    </>
  );
};

export default DrawerTop;
