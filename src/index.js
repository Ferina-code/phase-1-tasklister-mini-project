document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = document.querySelector('form')
  taskList.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task.value);
    taskList.reset();
  });
});
function buildToDo(task) {
  const p = document.createElement('p');
  const btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x'
  p.textContent = `${task} `;
  console.log(p);
  p.appendChild(btn);
  console.log(p);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
} 
