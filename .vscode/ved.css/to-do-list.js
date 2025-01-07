const todolist = [{
    name: 'make dinner',
    duedate: '2024-7-29'
}, {
    name: 'wash dishes',
    duedate: '2024-7-29'
}];

function renderTodoList() {
    let todolistHTML = '';

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        const { name, duedate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${duedate}</div>
            <button onclick="
                todolist.splice(${i}, 1);
                renderTodoList();
            " class="detele-js-btn">Delete</button>
        `
        ;
        todolistHTML += html;
    }

    console.log(todolistHTML);
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-duedate-input');
    const dueDate = dateInputElement.value;

    if (name) {
        todolist.push({ name, duedate: dueDate });
        console.log(todolist);
        inputElement.value = '';
        dateInputElement.value = '';

        renderTodoList(); // Update the list after adding a new todo
    } else {
        console.log("Todo name cannot be empty.");
    }
}

renderTodoList();
