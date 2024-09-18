import React from "react";

const Sticky = () => {
  const name = ["Mike", "aldi", "Deni", "Andre", "Stanly"];

  return (
    <>
      <div className="flex items-center w-[30rem] h-[30rem] bg-sky-100">
        <div className=" w-full h-[8rem] bg-gray-600 overflow-y-auto">
          <div className="sticky top-0 bg-blue-200">
            <p>Judul</p>
          </div>
          {/* Isi Content */}

          {name.map((val) => (
            <div className="w-full bg-white pb-1 border">
              <p>{val}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sticky;
