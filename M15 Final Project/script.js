const form = document.getElementById('taskForm');
const taskManager = document.getElementById('taskmanager');

let tasks = [];
let taskId = 1;

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('taskName').value.trim();
  const priority = document.getElementById('priority').value;
  const isImportant = document.getElementById('important').checked;
  const isCompleted = document.getElementById('completed').checked;
  const date = new Date().toLocaleString();

  if (!name) {
    alert("Task name cannot be empty!");
    return;
  }

  const task = {
    id: taskId++,
    name,
    priority,
    isImportant,
    isCompleted,
    date
  };

  tasks.push(task);
  renderTasks();
  form.reset();
  logTasks();
});

function renderTasks() {
  taskManager.innerHTML = '';

  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    if (task.isImportant) taskDiv.classList.add('important');
    if (task.isCompleted) taskDiv.classList.add('completed');

    taskDiv.innerHTML = `
      <strong>${task.name} (${task.priority})</strong><br>
      <span class="meta">Added on: ${task.date}</span><br>
      ${!task.isCompleted ? `
        <label>
          <input type="checkbox" onchange="toggleComplete(${task.id})" />
          Mark as Completed
        </label>
      ` : '<span>✔ Completed</span>'}
      <button class="delete-btn" onclick="deleteTask(${task.id})">🗑</button>
    `;

    taskManager.appendChild(taskDiv);
  });
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.isCompleted = !task.isCompleted;
    renderTasks();
    logTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
  logTasks();
}

function logTasks() {
  console.log(JSON.stringify(tasks));
}
