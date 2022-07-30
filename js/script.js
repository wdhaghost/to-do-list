const newTask = document.getElementById("add-task-input")
const addBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")
manageAddBtn()

function manageAddBtn() {
    newTask.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask()
        }
    });
    addBtn.addEventListener("click", function (event) {
        addTask()
    })
}

function addTask() {
    if (!newTask.value == "") {
        const task = `<li><div class="task-itm"><h2 class="task-title">${newTask.value}</h2><button class="del-task-btn"><i class="fa-solid fa-xmark"></i></button></div></li>`
        taskList.innerHTML += task
        manageTask()
    }
}
function delTask(a) {

    a.remove()
}
function completeTask(a) {
    a.classList.toggle("complete")
    a.firstElementChild.classList.toggle("complete")
}

function manageTask() {
    const taskItm = document.querySelectorAll("#task-list .task-itm")
    const delBtns = document.querySelectorAll("#task-list .del-task-btn")
    taskItm.forEach(itm => {
        itm.addEventListener("click", function (event) {
            completeTask(this)
        })
    });
    delBtns.forEach(delBtn => {
        delBtn.addEventListener("click", function (event) {
            
        })
    })
}