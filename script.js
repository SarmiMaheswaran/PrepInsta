let taskList = []; // Array to store tasks

function addTask() {
  const newTaskInput = document.getElementById('newTask');
  const newTaskValue = newTaskInput.value.trim(); // Remove leading/trailing whitespace

  if (newTaskValue) { // Check if input is not empty
    taskList.push({ text: newTaskValue, completed: false }); // Add task object
    newTaskInput.value = ""; // Clear the input field
    renderTasks(); // Update the task list
  }
}

function renderTasks() {
  const taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = ""; // Clear existing list items

  for (let task of taskList) {
    const listItem = document.createElement('li');
    listItem.innerText = task.text;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
    });

    listItem.appendChild(checkbox);
    taskListElement.appendChild(listItem);
  }
}

function clearCompleted() {
  taskList = taskList.filter(task => !task.completed); // Filter out completed tasks
  renderTasks(); // Update the task list
}
