import ServerInfo from "./Components/Info/ServerInfo";
import TodoForm from "./Components/Form/TodoForm";
import PageTitle from "./Components/PageTitle/PageTitle";
import TodoList from "./Components/TodoList/TodoList";

export default function App() {
  return (
    <>
      <PageTitle />
      <TodoForm />
      <TodoList />
      <ServerInfo />
    </>
  );
}
