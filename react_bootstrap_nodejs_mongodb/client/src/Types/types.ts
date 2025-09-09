export type GlobalContextType = {
  todos: TodoType[] | [];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[] | []>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalInfo: string | null;
  setModalInfo: React.Dispatch<React.SetStateAction<string | null>>;
  editTodo: TodoType | null;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoType | null>>;
};

export type TodoType = {
  _id: string;
  task: string;
};
