import React from "react";

const Static = () => {
  // Static itu default dari absolute ,
  // jika kita menulis absolute lalu tidak ada pembatas relative , maka dia akan mencapai tempat teratas

  return (
    <div className="flex items-center justify-center w-[50rem] h-[30rem] bg-green-100 ">
      <div className="flex justify-center items-center w-[40rem] h-[20rem] bg-sky-100">
        {/* static :  akan mencari element paling atas , dan akan berhenti jika ada
        relative */}
        <div className="static flex justify-center items-center top-0 left-0 w-[10rem] h-[10rem] bg-red-400">
          <div className="absolute top-0 left-0 w-[5rem] h-[5rem] bg-gray-100">
            <p>Ini Static</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
