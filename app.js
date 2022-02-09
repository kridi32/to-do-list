const tr = document.getElementById("tr");
const td = document.getElementById("data");
// lets get the body
const tableBody = document.getElementById("tableBody");
function taskMaker(rows){
    rows.appendChild(sl());
    rows.appendChild(taskName());
    rows.appendChild(taskStatus());
    return rows;
}
function sl(){
    let serial = document.createElement("td");
    serial.innerText = "1";
    serial.classList = "px-12 py-2 bg-purple-200  text-2xl font-semibold";
    return serial;
}
function taskName(){
    let task = document.createElement("td");
    task.innerText =  "do something new";
    task.classList = "px-auto py-auto bg-purple-200  text-lg font-regular";
    return task;
}
function taskStatus(){
    let task = document.createElement("td");
    task.innerText =  "done";
    task.classList = "px-auto py-auto bg-purple-200  text-xl font-bold";
    return task;
}
td.addEventListener("click", function(){
    
let singleTask = document.createElement("tr");
   tableBody.appendChild(taskMaker(singleTask));
});