import axios from "axios";

import { TodoBody } from "types/todos.type";

export const postTodo = async (data: TodoBody): Promise<void> => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8001/api/add-todo",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
