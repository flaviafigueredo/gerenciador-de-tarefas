import { addTask, removeTask, completeTask, getTasks } from './tasks.js'

const inputNewTask = document.getElementById('new-task')
const btnAddTask = document.getElementById('add-task')
const taskList = document.getElementById('task-list')

function renderTasks() {
    taskList.innerHTML = getTasks().map((task, index) => `
        <li id="task-item-${index}">
            <input type="checkbox" id="task-${index}" ${task.isCompleted ? 'checked' : ''} data-index="${index}">
            <label for="task-${index}">${task.description}</label>
        </li>
    `).join('')
}

function handleAddTask() {
    const newTaskDescription = inputNewTask.value.trim()
    
    if (newTaskDescription === '') {
        alert("Por favor, adicione uma tarefa!")
        return
    }

    addTask(newTaskDescription)
    inputNewTask.value = ''
    renderTasks()
}

function handleCompleteTask(index) {
    completeTask(index)
    const taskItem = document.getElementById(`task-item-${index}`)

    taskItem.innerHTML = "Tarefa concluída! ✨"

    setTimeout(() => {
        removeTask(index)
        renderTasks()
    }, 1000)
}

btnAddTask.addEventListener('click', handleAddTask)

taskList.addEventListener('change', (event) => {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const index = event.target.getAttribute('data-index')
        handleCompleteTask(index)
    }
})

inputNewTask.addEventListener('keyup', e => {    
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed) handleAddTask()
})

renderTasks()