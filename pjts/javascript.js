function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      const li = document.createElement('li');
      li.textContent = taskInput.value;
      taskList.appendChild(li);
      taskInput.value = '';
  
      li.addEventListener('click', function () {
        this.remove();
      });
    } else {
      alert('Please enter a task!');
    }
  }
  