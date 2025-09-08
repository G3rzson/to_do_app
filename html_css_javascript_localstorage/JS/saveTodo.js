export function saveTodo(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}