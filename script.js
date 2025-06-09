const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    // Stops the page from reloading
    event.preventDefault();

    // Get the user's text input
    const newTaskText = todoInput.value;

    // Create a new list item and set the text for it
    // Create a checkbox next to each new list item
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const textSpan = document.createElement('span');
    textSpan.innerText = newTaskText;

    // Add the check box and text span to the 'listItem'
    // Add the new list item to the to-do list, then clear the text box

    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
    todoList.appendChild(listItem);
    todoInput.value = '';
});

todoList.addEventListener('change', function(event){
    if (event.target.type === 'checkbox'){
        const listItem = event.target.parentElement;
        this.classList.toggle('completed');
    }

})