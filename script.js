const listContainer = document.getElementById("list-container")

const inputBox = document.getElementById("input-box")

const addTask = () => {
    const taskText = inputBox.value
    if (taskText !== "") {
        const li = document.createElement("li")
        li.textContent = taskText
        listContainer.appendChild(li)
        inputBox.value = ""

        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        span.addEventListener("click", function() {
            li.remove()
            saveTask()
        })
    } else {
        alert("Please write a task")
    }
}

const toggleTask = (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
        saveTask()
    }
}

listContainer.addEventListener("click", toggleTask)

const saveTask = () => {
    localStorage.setItem("tasks", listContainer.innerHTML)
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("tasks")
}

showTask()