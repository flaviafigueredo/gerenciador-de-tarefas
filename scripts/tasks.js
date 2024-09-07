let tasks = []

export function addTask(description) {
    tasks.push({ description, isCompleted: false })
}

export function removeTask(index) {
    tasks.splice(index, 1)
}

export function completeTask(index) {
    tasks[index].isCompleted = true
}

export function getTasks() {
    return tasks
}