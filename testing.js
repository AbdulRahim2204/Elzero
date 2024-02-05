let task = document.getElementById('task')
let addTask = document.querySelector('[action="#"]')

addTask.onsubmit = (e) => {
  e.preventDefault();
  let tasks = []
  let taskId = Math.round(Math.random() * 10000000000000000);
  let taskTitle = task.value;
  task.value = '';

  tasks.push({id: taskId, title: taskTitle});

  localStorage.setItem('tasks', tasks);
  console.log(localStorage.getItem('tasks'));
}