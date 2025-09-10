export type GlobalContextType = {
  todos: TodoType[] | [];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[] | []>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  editTodo: TodoType | null;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoType | null>>;
  info: string | null;
  setInfo: React.Dispatch<React.SetStateAction<string | null>>;
  serverError: string | null;
  setServerError: React.Dispatch<React.SetStateAction<string | null>>;
};

export type TodoType = {
  id: string;
  task: string;
};
