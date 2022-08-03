const newTask = document.getElementById("add-task-input")
const addBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")
let count=0;
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
        
        
        if(taskList.children.length==0){
            count++
            taskList.appendChild(createTask())
        }else{
            count++
            taskList.insertBefore(createTask(),taskList.firstElementChild)
        }
        
        manageTask(createTask())
    }
}
function createTask(){
    const task=document.createElement("li")
    task.id=count
    task.innerHTML =`<div class="task-itm"><h2 class="task-title">${newTask.value}</h2><button data-id="${count}"class="del-task-btn"><i class="fa-solid fa-xmark"></i></button></div>`
    
   return task
}

function manageTask(task) {
    const taskId=task.id
    const delBtn=document.querySelector(`button[data-id="${taskId}"]`)
    const div =document.getElementById(`${taskId}`).firstElementChild
        div.addEventListener("click", function (event) {
            completeTask(this)
        })


        delBtn.addEventListener("click", function (event) {
            delTask(this.dataset.id)

        })

}

function delTask(id) {
    document.getElementById(id).remove()
}

function completeTask(a) {
    a.classList.toggle("complete")
    a.firstElementChild.classList.toggle("complete")
}
