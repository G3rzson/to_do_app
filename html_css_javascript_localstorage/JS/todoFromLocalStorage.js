export function todoFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
