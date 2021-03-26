import React from "react";

import CloseIcon from "assets/svg/close";

const DeleteModal: React.FC = () => {
  return (
    <div
      className="bg-white p-4 h-40 w-64 rounded-lg fixed z-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      style={{ left: "50%", top: "50%" }}
    >
      <div className="flex flex-col h-full justify-between">
        <section className="flex flex-row justify-between">
          <div className="text-darkPurple text-sm subpixel-antialiased tracking-wide font-bold whitespace-normal">
            {"This task is not completed, delete?"}
            <p className="text-2xl">&#128540;</p>
          </div>

          <CloseIcon />
        </section>

        <button className="text-white text-sm tracking-wide font-bold px-4 py-2 rounded-lg bg-red-600">
          {"Delete uncompleted task"}
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
