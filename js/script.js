let post = document.getElementById("postButton");
let clear = document.getElementById("clearButton");
let mark = document.getElementById("markButton");
let del = document.getElementById("deleteButton");

post.addEventListener("click", postTodo);
clear.addEventListener("click", clearTodo);
mark.addEventListener("click", markTodo);
del.addEventListener("click", deleteTodo);

function postTodo(e) {
    e.preventDefault();
    var todo  = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    let currentList = list.innerHTML;
    list.innerHTML  = currentList  + `<span name="text"> <input type="checkbox" name="todo" />${todo} <br> </span>`
}

function clearTodo(e) {
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    var l = todos.length;
    for (var i = 0; i < l; i++) {
        todos[i].checked = false;
    }
}

function markTodo(e) {
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    var l = todos.length;
    for (var i = 0; i < l; i++) {
        todos[i].checked = true;
    }
}

function deleteTodo(e) {
    e.preventDefault();
    var texts = document.getElementsByName("text");
    var l = texts.length;
    for (var i = 0; i < l; i++) {
        texts[0].remove();
    }
}