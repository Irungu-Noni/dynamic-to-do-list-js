document.addEventListener('DOMContentLoaded', function() 
{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-List');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item with the task text and a delete button
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        // Append the button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskListList.appendChild(li);
        // Clear the input field
        taskInput.value = '';
    }

    // Add an event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add an event listener to the input field for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});