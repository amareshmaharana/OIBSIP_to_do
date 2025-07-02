const listContainer = document.getElementById("list-container")

const inputBox = document.getElementById("input-box")

const addButton = document.querySelector("button")

addButton.addEventListener("click", function() {
    const taskText = inputBox.value
    if (taskText !== "") {
        const li = document.createElement("li")
        li.textContent = taskText
        listContainer.appendChild(li)
        inputBox.value = ""
    }
})

const listItems = document.querySelectorAll("li")

listItems.forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.toggle("checked")
    })
})

// const deleteButton = document.createElement("button")
// deleteButton.textContent = "Delete"
// listContainer.appendChild(deleteButton)

// deleteButton.addEventListener("click", function() {
//     const checkedItems = document.querySelectorAll("li.checked")
//     checkedItems.forEach(function(item) {
//         listContainer.removeChild(item)
//     })
// })
