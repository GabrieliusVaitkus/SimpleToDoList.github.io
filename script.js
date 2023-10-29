document.addEventListener("DOMContentLoaded", function() {
    //References for the input field, button and task list
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    //Event listener for the "Add task" button
    addTaskButton.addEventListener('click', function() {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            const listItem = document.createElement('li');
            listItem.textContent = taskValue;
            listItem.className = "taskItem"; // Assign a class for styling and event handling

            // Add click event listener to the list item
            listItem.addEventListener('click', function() {
                this.classList.toggle('completed');
            });

            taskList.appendChild(listItem);
            taskInput.value = "";
        } else {
            alert('Please enter a task');
        }
    })
})