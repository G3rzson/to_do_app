import TodoForm from "./Components/Form/TodoForm";
import Modal from "./Components/Modal/Modal";
import PageTitle from "./Components/PageTitle/PageTitle";
import TodoList from "./Components/TodoList/TodoList";

export default function App() {
  return (
    <>
      <PageTitle />
      <TodoForm />
      <TodoList />
      <Modal />
    </>
  );
}
