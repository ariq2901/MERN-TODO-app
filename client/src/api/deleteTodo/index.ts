import axios from "axios";

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await axios({
      method: "DELETE",
      url: `http://localhost:8001/api/delete-todo/${id}`,
    });
  } catch (error) {
    throw new Error(error);
  }
};
