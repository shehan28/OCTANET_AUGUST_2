const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');


loadTasks();


addTaskButton.addEventListener('click', addTask);


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    const taskContent = document.createElement('span');
    const deleteButton = document.createElement('button');

    taskContent.textContent = taskText;
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => removeTask(taskItem));
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

  
    saveTasks();

    taskInput.value = '';
  }
}


function removeTask(taskItem) {
  taskList.removeChild(taskItem);
  
  saveTasks();
}


function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    const taskContent = document.createElement('span');
    const deleteButton = document.createElement('button');

    taskContent.textContent = task;
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => removeTask(taskItem));
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
}

// Function to save tasks to local storage
function saveTasks() {
  const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
