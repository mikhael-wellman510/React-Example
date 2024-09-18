import React from "react";

const Drawer = ({ isOpen, onClose }) => {
  console.log("Cek :  ", isOpen);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-10 h-screen w-[15rem] bg-sky-100 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <p>Draw Examples</p>
        <button onClick={() => onClose(false)} className="bg-green-500 rounded">
          Close Modal
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => onClose(false)}
          className={`fixed inset-0 bg-black bg-opacity-80 w-screen h-screen `}
        ></div>
      )}
    </>
  );
};

export default Drawer;
