let _editingTodoId = null;

export function setEditingTodoId(id) {
    _editingTodoId = id;
}

export function getEditingTodoId() {
    return _editingTodoId;
}

export function clearEditingTodoId() {
    _editingTodoId = null;
}
