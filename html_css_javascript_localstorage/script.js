import { handleFormSubmit } from './JS/handleFormSubmit.js';
import { renderTodos } from './JS/renderTodos.js';

// form kezelése
document.getElementById('toDoForm').addEventListener('submit', (e) => handleFormSubmit(e));

// todok megjelenítése
renderTodos();
