import React from "react";

import TaskCard from "components/TaskCard";

const TaskList: React.FC = () => {
  return (
    <section className="flex flex-col overflow-x-hidden overflow-y-auto h-tasklist rounded">
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
      <TaskCard title="Task Pertamaku yeayyy" />
    </section>
  );
};

export default TaskList;
