const todoList = document.querySelector(".todo-list");
const createList = document.querySelector("#createList");
const removeList = document.querySelector("#removeList");
const editList = document.querySelector("#editList");
const taskInput = document.querySelector("#taskInput");
let listId = 1;
let radioValue = 1;
let createdList = [];
createList.addEventListener("click", function() {
    if (taskInput.value !== "") {
        let listItem = document.createElement('li');

        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        let radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.setAttribute('name', 'radioGroup');
        radioButton.setAttribute('value', `option${radioValue}`)
        radioValue++;
        
        let createNewList = document.createElement('ul');
        createNewList.id = `List${listId}`;
        createNewList.appendChild(radioButton);
        createNewList.appendChild(checkBox);
        createNewList.style.listStyleType = 'none';
        listItem.textContent = taskInput.value;
        listItem.style.display = 'inline-block';
        checkBox.style.verticalAlign = 'middle';
        
        createdList.push(taskInput.value);
        
        createNewList.appendChild(listItem);
        todoList.appendChild(createNewList);
        listId++;
        createdList.push(createNewList);
        taskInput.textContent = "";
        taskInput.placeholder = "Create a new To-Do List.";
    }
});
removeList.addEventListener("click", function() {
    if(createdList.length > 0) {
        let lastList = createdList.pop();
        todoList.removeChild(lastList);
        listId--;
    }
});
editList.addEventListener("click", function() {
    let radioButton = todoList.querySelectorAll('input[name="radioGroup"]');
    radioButton.forEach(function(radioButton) {
        if(radioButton.checked) {
            let checkValue = radioButton.parentElement.querySelector('li').textContent;
            taskInput.value = checkValue;
        }
    });
});
/*If you want to expand the functionality further, 
you could consider features like editing existing tasks, 
marking tasks as completed, or persisting tasks across page reloads using local storage.*/