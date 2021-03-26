const todoList = [
    {todo: "clone repo for starter code", status: "complete"},
    {todo: "add css and js links to index", status: "complete"},
    {todo: "complete the app.js", status: "started"},
    {todo: "finish the lab week 11", status: "started"}
]
const completedTodos = []

for (const i in todoList) {
    if (todoList[i].status === "complete") {
        completedTodos.push(todoList[i])
    }
}

for (const i in completedTodos) {
    const {todo} = completedTodos[i]
    console.log(todo)
}