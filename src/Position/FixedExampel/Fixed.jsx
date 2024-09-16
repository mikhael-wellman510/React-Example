import React from "react";

const Fixed = () => {
  // Fixed : walauppun ada relative  , ia akan ke window paling kiri
  // jika pakai absolute , ia akan berhenti di parent relative
  // tapi kalau fixed , ia akan melewatkan semua nya
  return (
    <>
      <div className=" flex items-center justify-center w-[50rem] h-[35rem] bg-sky-300">
        <div className="relative flex items-center justify-center w-[20rem] h-[20rem] bg-green-100">
          <div className="fixed top-0 left-0 w-[10rem] h-[10rem] bg-pink-500">
            <p>ini Fixed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fixed;
