import { renderTodos } from './renderTodos.js';
import { saveTodo } from './saveTodo.js';
import { todoFromLocalStorage } from './todoFromLocalStorage.js';

export function deleteTodo(todoContainer, todoId) {
    const ul = document.getElementById('toDoList');

    // DOM-ból törlés
    ul.removeChild(todoContainer);

    // localStorage frissítés
    const todos = todoFromLocalStorage();
    const updatedTodos = todos.filter(t => t.id !== todoId);
    saveTodo(updatedTodos);
    renderTodos();
}
