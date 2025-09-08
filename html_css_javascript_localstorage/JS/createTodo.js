import { createID } from './createID.js';

export function createTodo(todo) {
    return {
        id: createID(),
        task: todo,
    }
}