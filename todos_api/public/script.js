$(document).ready( () =>
{
    $.getJSON("/api/todos")
    .done(addTodos);

    $('#todoInput').keypress((event) =>
    {
        if(event.which === 13) // enter
            createTodo();
    });

    $('.list').on('click', 'li', function()
    {
        updateTodo($(this));
    });

    $('.list').on('click','span', function(event)
    {   
        event.stopPropagation();
        removeTodo($(this).parent());
    });
});

function addTodos(todos)
{
    // add todos to page here
    todos.forEach((todo) =>
    {   
        addTodo(todo);
    });
}

function createTodo()
{
    // send request to create new todo
    let userInput = $("#todoInput").val();
    $.post("/api/todos",
    {
        name: userInput       
    })
    .then((newTodo) =>
    {   
        $("#todoInput").val('');
        addTodo(newTodo);
    });

}

function addTodo(todo)
{
    let newTodo = $('<li class="task">' + todo.name + " <span>X</span> </li>");
    newTodo.data('id', todo._id); // jQuery store id's in memory
    newTodo.data('completed', todo.completed);

    if(todo.completed)
        newTodo.addClass("done");

    $('.list').append(newTodo);
}

function removeTodo(todo)
{
    let deleteUrl = "/api/todos/" + todo.data('id');
    $.ajax(
        {
            method: "DELETE",
            url: deleteUrl
        }
    )
    .then(() =>
    {
        todo.remove();
    })
    .catch((error) =>
    {
        console.log(error);
    });
}

function updateTodo(todo)
{   
    let updateUrl = "/api/todos/" + todo.data('id');
    let isDone = todo.data("completed");
    let updateData = {completed: !isDone};
    $.ajax(
        {
            method: "PUT",
            url: updateUrl,
            data: updateData
        }
    )
    .then((updatedTodo) =>
    {
        todo.toggleClass("done");
        todo.data("completed", !isDone);   
    })
    .catch((error) =>
    {
        console.log(error);
    });
}