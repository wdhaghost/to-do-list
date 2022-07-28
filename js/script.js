const newTask=document.getElementById("add-task-input")
const addBtn=document.getElementById("add-task-btn")
const taskList=document.getElementById("task-list")
addTask()

function addTask(){
    addBtn.addEventListener("click",function(event){
        if(!newTask.value==""){
            const task=`<li><div class="task-itm"><h2>${newTask.value}</h2><button class="del-task-btn"><i class="fa-solid fa-xmark"></i></button></div></li>`
            taskList.innerHTML+=task
        }
        console.log(newTask.value)
    })
}

function completeTask (){
    
}