import { todoFromLocalStorage } from './todoFromLocalStorage.js';
import { addTodoToDOM } from './addTodoToDOM.js';

export function renderTodos() {
    const ul = document.getElementById('toDoList');
    ul.innerHTML = '';
    const todos = todoFromLocalStorage();

    if (todos.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nincs teendő! 😊';
        li.classList.add('emptyList');
        ul.appendChild(li);
        localStorage.removeItem('todos');
        return;
    }

    todos.forEach(todo => addTodoToDOM(todo));
}