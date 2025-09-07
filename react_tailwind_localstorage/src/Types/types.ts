export type GlobalContextType = {
  todos: Todo[] | [];
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | []>>;
  errorMsg: string | null;
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>;
  info: string | null;
  setInfo: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  editTodo: Todo | null;
  setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
};

export type Todo = {
  id: string;
  task: string;
};
