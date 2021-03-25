import React from "react";

import ChecklistIcon from "assets/svg/checklist";
import TrashIcon from "assets/svg/trash";
import DeleteModal from "components/DeleteModal";

type Props = {
  title: string;
};

const TaskCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-center items-center relative rounded shadow-lg p-4 mb-2 bg-white">
      <p className="flex-1 text-sm subpixel-antialiased tracking-wide font-bold whitespace-normal truncate">
        {title}
      </p>

      <div className="flex text-darkPurple">
        <span>
          <ChecklistIcon />
        </span>
        <span className="w-5 h-5 ml-4 text-red-600">
          <TrashIcon />
        </span>
      </div>

      <DeleteModal />
    </div>
  );
};

export default TaskCard;
