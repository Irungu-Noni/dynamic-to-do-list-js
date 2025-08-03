document.addEventListener('DOMContentLoaded', function() 
{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load existing tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || '[]';
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a new task
    function addTask(taskText, save = true) {

        // If taskText is not provided, get it from the input field
        if (save) {
            taskText = taskInput.value.trim();
            if (taskText === "") {
                alert('Please enter a task!');
                return;
            }
        }
        // Create a new list item with the task text and a delete button
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);

            // Remove the task from localStorage
            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || '[]';
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append the button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Save the task to localStorage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || '[]';
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));

            taskInput.value = ""; // Clear the input field
        }
    }

    addButton.addEventListener('click', () => addTask());
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load existing tasks when the page loads
    loadTasks();
});