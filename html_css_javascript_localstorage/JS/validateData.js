export function validateData(data) {
    const task = data.trim();

    if (task === "") {
        return "A mező nem lehet üres!";
    } else if (task.length > 30) {
        return "Max 30 karakter!";
    }

    return null;
}