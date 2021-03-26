import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "api/getTodos";

import TaskCard from "components/TaskCard";

const TaskList: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <div>Getting task list...</div>;
  }

  if (isError) {
    return <div>Failed getting data... {error}</div>;
  }

  return (
    <section className="flex flex-col overflow-x-hidden overflow-y-auto h-tasklist rounded">
      {data?.todos.map((todo) => {
        return <TaskCard key={todo._id} title={todo.title} />;
      })}
    </section>
  );
};

export default TaskList;
