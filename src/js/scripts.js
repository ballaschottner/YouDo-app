

document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("todo-list");
    const todoValue = document.getElementById("todo_input")


    addBtn.addEventListener("click", function () {

        const todoTxt = todoValue.value;
        const liElem = document.createElement("li");

        liElem.textContent = todoTxt;

        list.prepend(liElem);
    });

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