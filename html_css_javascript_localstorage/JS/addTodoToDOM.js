import { deleteTodo } from './deleteTodo.js';
import { editTodo } from './editTodo.js';

export function addTodoToDOM(todo) {
    const ul = document.getElementById('toDoList');

    // lista elem 
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    // gombokat tartalmazó div
    const todoBtnContainer = document.createElement('div');
    todoBtnContainer.classList.add('todoBtnContainer');

    // delete gomb
    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = './Icons/trash.svg'
    deleteIcon.alt = 'törlés icon'
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.classList.add('btn', 'deleteBtn');

    // delete esemény hozzáadása
    deleteBtn.addEventListener('click', () => {
        deleteTodo(todoContainer, todo.id);
    });

    // edit gomb
    const editBtn = document.createElement('button');
    const editIcon = document.createElement('img');
    editIcon.src = './Icons/edit.svg'
    editIcon.alt = 'szerkesztés icon'
    editBtn.appendChild(editIcon);
    editBtn.classList.add('btn', 'editBtn');

    // edit esemény hozzáadása
    editBtn.addEventListener('click', () => {
        editTodo(todo);
    });

    // lista szöveg
    const li = document.createElement('li');
    li.classList.add('todoText');
    li.textContent = todo.task;

    // gombok és szöveg hozzáadása a DOM-hoz
    todoBtnContainer.appendChild(editBtn);
    todoBtnContainer.appendChild(deleteBtn);
    todoContainer.appendChild(li);
    todoContainer.appendChild(todoBtnContainer);
    ul.appendChild(todoContainer);
}