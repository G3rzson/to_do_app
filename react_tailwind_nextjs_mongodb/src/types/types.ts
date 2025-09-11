export type GlobalContextType = {
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
  _id: string;
  task: string;
};
