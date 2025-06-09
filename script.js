const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    // Stops the page from reloading
    event.preventDefault();

    // Get the user's text input
    const newTaskText = todoInput.value;

    // Create a new list item and set the text for it
    const listItem = document.createElement('li');
    listItem.innerText = newTaskText;

    // Add the new list item to the to-do list, then clear the text box
    todoList.appendChild(listItem);
    todoInput.value = '';
});
