import { createTodo } from './createTodo.js';
import { sanitizeData } from './sanitizeData.js';
import { validateData } from './validateData.js';
import { saveTodo } from './saveTodo.js';
import { renderTodos } from './renderTodos.js';
import { todoFromLocalStorage } from './todoFromLocalStorage.js';
import { getEditingTodoId, clearEditingTodoId } from './global/editingID.js';

const input = document.getElementById('toDoInput');
const errorMsg = document.getElementById('errorMsg');
const submitIcon = document.getElementById('submitIcon');

export function handleFormSubmit(e) {
    e.preventDefault();
    const inputValue = input.value;
    const editingTodoId = getEditingTodoId();

    // Validáció
    const error = validateData(inputValue);
    if (error) {
        errorMsg.textContent = error;
        return;
    }

    // Szűrés
    const safeValue = sanitizeData(inputValue);

    // todok lekérése localStorage-ből
    const todos = todoFromLocalStorage();

    if (editingTodoId !== null) {
        submitIcon.src = './Icons/check.svg';
        submitIcon.alt = 'pipa icon';
        // Szerkesztés esetén
        const updatedTodos = todos.map((t) =>
            t.id === editingTodoId ? { ...t, task: safeValue } : t
        );
        // Todo mentése localStorage-be
        saveTodo(updatedTodos);
        // Reset
        clearEditingTodoId();
    } else {
        submitIcon.src = './Icons/plus.svg';
        submitIcon.alt = 'plusz icon';
        // Todo létrehozása
        const newTodo = createTodo(safeValue)
        // Új todo hozzáadása a tömbhöz
        todos.push(newTodo);
        // Todo mentése localStorage-be
        saveTodo(todos);
    }

    // Űrlap visszaállítása
    input.value = "";
    errorMsg.textContent = "";
    submitIcon.src = './Icons/plus.svg';
    submitIcon.alt = 'plusz icon';

    // renderelés
    renderTodos();
}
