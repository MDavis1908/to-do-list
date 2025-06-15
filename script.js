const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function createTaskElement(task) {
    // Create a new list item and set the text for it
    // Create a checkbox next to each new list item
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a span to hold the text for each entry
    const textSpan = document.createElement('span');
    textSpan.innerText = task.text;

    if (task.completed) {
        listItem.classList.add('completed');
        return listItem;
    }

    // Create a delete button to remove an entry
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '&times;';

    // Add the check box and text span to the 'listItem'
    // Add the new list item to the to-do list, then clear the text box

    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    todoInput.value = '';
}

function saveTasks() {
    // Create variable to hold an array of taskObjects.
    const tasks = [];
    const listItems = document.querySelectorAll('#todo-list li');
    // For Each loop iterates through all 'li' elements turning them into objects
    listItems.forEach(function(li) {
        const textSpan = li.querySelector('span');
        const taskText = textSpan.innerText;
        const isCompleted = li.classList.contains('completed');
        const taskObject = {
            text: taskText,
            completed: isCompleted
        };
        tasks.push(taskObject);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks != null) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(function(){
            const newElement = createTaskElement(task);
            todoList.appendChild(newElement);

        })
    }

}

todoForm.addEventListener('submit', function(event) {
    // Stops the page from reloading
    event.preventDefault();

    const taskObject = {
        text: newTaskText,
        completed: false
    };
    const newElement = createTaskElement(taskObject);
    todoList.appendChild(newElement);

    // Get the user's text input
    const newTaskText = todoInput.value;
});

todoList.addEventListener('change', function(event){
    if (event.target.type === 'checkbox'){
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
    }
})

todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')){
    const listItem = event.target.parentElement;
    this.removeChild(listItem);
    }
})

loadTasks();