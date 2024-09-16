import React from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return;

  const handleSubmit = () => {
    onSubmit("Succes");
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed bg-black bg-opacity-[0.86] inset-0 w-screen h-screen flex items-center justify-center"
      >
        <div className="flex flex-col justify-around max-w-[30rem] max-h-[40rem]  min-w-[10rem] min-h-[15rem] p-4 bg-white rounded">
          <div className="flex items-center justify-center pb-3">
            <p>This is modal components</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              suscipit fuga expedita nam non doloremque aliquam? Possimus cum
              ad, modi aliquam quasi atque consectetur illo unde quis,
              blanditiis, nemo tempore. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Optio, rerum! Eligendi illo, accusantium neque
              nihil exercitationem laudantium ullam maiores dolore dicta
              molestiae sint voluptas ducimus blanditiis et pariatur! Eveniet,
              accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Natus error dignissimos consequatur sint quis voluptatem
              aliquam, aut velit quod! Corrupti soluta nobis commodi quia veniam
              veritatis quidem illum id ea. accusantium. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Natus error dignissimos
              consequatur sint quis voluptatem aliquam, aut velit quod! Corrupti
              soluta nobis commodi quia veniam veritatis quidem illum id ea.
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 pt-8">
            <button
              onClick={handleSubmit}
              className="bg-green-400 w-[10rem] h-[2rem] rounded"
            >
              Submit
            </button>
            <button
              onClick={() => onClose(false)}
              className="bg-red-500 w-[10rem] h-[2rem] rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
