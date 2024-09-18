import React, { useRef, useState } from "react";
import uploadFile from "../assets/upload.svg";
const InputFile = ({ isOpen, onClose, sendDataToParent }) => {
  const ref = useRef(null);
  const [file, setFile] = useState([]);
  const [img, setImg] = useState([]);

  if (!isOpen) return;

  const HandleClickUploadFile = () => {
    ref.current.click();
  };

  const HandleUploadFile = (e) => {
    const getFile = e.target.files[0].name;
    // Cara new ,
    setFile((prev) => [...prev, getFile]);
    setImg((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
  };

  const HandleDeletedList = (e) => {
    setFile((prev) => prev.filter((val, idx) => e !== idx));
  };

  const HandleSubmit = () => {
    sendDataToParent(img);
  };

  return (
    <>
      <div className="fixed top-0 bg-black bg-opacity-70 flex items-center justify-center w-screen h-screen ">
        <div className="py-4 px-6 w-[35rem]  bg-white rounded">
          <div className="flex flex-col gap-4 w-full h-full">
            <div className="flex justify-between ">
              <div>
                <p>Upload Files</p>
              </div>
              <div
                onClick={() => onClose(false)}
                className="bg-red-300 w-[1.5rem] h-[1.5rem] cursor-pointer flex items-center justify-center rounded"
              >
                <p>x</p>
              </div>
            </div>

            <div
              onClick={HandleClickUploadFile}
              className="flex justify-center flex-col gap-4 items-center w-full min-h-[10rem]  border-[0.1rem] border-black rounded border-dashed"
            >
              <div>
                <img className="w-10" src={uploadFile} alt="" />
              </div>
              <div>
                <p>Select your file or drag and drop</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p>Supported Format : JPG, SVG ,PDF</p>
              <p>Maximum Size : 25mb</p>
            </div>
            {file.map((val, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center rounded px-4  w-full h-[4rem] bg-gray-100"
              >
                <p>
                  {idx + 1}. {val}
                </p>
                <div
                  onClick={() => HandleDeletedList(idx)}
                  className="flex justify-center cursor-pointer rounded w-[1.5rem] h-[1.5rem] items-center bg-red-400"
                >
                  <p>x</p>
                </div>
              </div>
            ))}

            <div className="flex justify-center gap-8">
              <button className="w-28 h-8 bg-red-300 rounded">Cancel</button>
              <button
                onClick={HandleSubmit}
                className="w-28 h-8 bg-green-500 rounded "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Input file di hidden */}
      <div>
        <input
          ref={ref}
          type="file"
          hidden={true}
          onChange={HandleUploadFile}
        />
      </div>
    </>
  );
};

export default InputFile;
