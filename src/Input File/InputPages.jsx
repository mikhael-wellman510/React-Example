import React, { useState } from "react";
import InputFile from "./InputFile";

const InputPages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgFile, setImgFile] = useState([]);
  const onClose = (val) => {
    setIsOpen(false);
  };

  const getDataFromParent = (val) => {
    setImgFile(val);
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-pink-100">
        <div className="flex items-center justify-center w-[20rem] h-[10rem] bg-gray-200">
          <button
            onClick={(val) => setIsOpen(true)}
            className="bg-green-300 p-2 rounded"
          >
            Open Input Files
          </button>
        </div>
        {imgFile.map((val) => (
          <div className="flex flex-col w-[10%]">
            <img src={val} alt="" />
          </div>
        ))}
      </div>

      <InputFile
        isOpen={isOpen}
        onClose={onClose}
        sendDataToParent={getDataFromParent}
      />
    </>
  );
};

export default InputPages;
