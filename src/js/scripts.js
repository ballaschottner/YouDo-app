

document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("todo-list");
    const todoValue = document.getElementById("todo_input");
    const inputValidation = document.getElementById("validation");

    addBtn.addEventListener("click", function () {

        const todoTxt = todoValue.value;
        const liElem = document.createElement("li");
        const remove = document.createElement("button");

        liElem.textContent = todoTxt;
        remove.textContent = "delete";

        list.append(liElem);
    });

    todoValue.addEventListener("keyup", (event) => {
        console.log(todoValue);
        console.log(event);
        if(todoValue.length >= 6) {
            inputValidation.style.display = "none";
        }
    })

    list.addEventListener("click", event => {
        console.log("item", event);

        if(event.target.nodeName === "LI") {
            event.target.remove();
        }
    })

    document.body.addEventListener("click", event => {
        console.log("body", event);
    })

});