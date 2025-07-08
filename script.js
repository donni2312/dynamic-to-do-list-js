// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Add event listener to addButton
addButton.addEventListener('click', addTask);

// Add event listener to taskInput for 'keypress' to add task on Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});