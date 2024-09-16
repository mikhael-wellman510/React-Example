import React, { useState } from "react";
import Modal from "./Modal";

const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (val) => {
    setIsModalOpen(false);
  };

  const handleSubmit = (val) => {
    setIsModalOpen(false);
    console.log("Result : ", val);
  };
  return (
    <>
      <div className="w-screen h-screen bg-red-100 flex items-center justify-center">
        <div className="w-[30rem] h-[20rem] bg-sky-300 flex items-center justify-center">
          <button
            onClick={openModal}
            className="cursor-pointer bg-green-700 h-[3rem] w-[10rem] rounded"
          >
            Open Modal
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ModalExample;
