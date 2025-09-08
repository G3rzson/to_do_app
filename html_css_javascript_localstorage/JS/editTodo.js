import { setEditingTodoId } from './global/editingID.js';

export function editTodo(todo) {
    const input = document.getElementById('toDoInput');
    input.value = todo.task;
    input.focus();
    setEditingTodoId(todo.id);

    // Ikon check-re
    submitIcon.src = './Icons/check.svg';
    submitIcon.alt = 'pipa icon';
}

