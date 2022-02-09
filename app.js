let data = document.getElementById("dat");
let input = document.getElementById("inputText");
let tableBody = document.getElementById("tableBody");
let count = 0;
data.addEventListener("click", function(){
  let singleTask = document.createElement("tr");
    tableBody.appendChild(trMaker(singleTask));
    
});
function trMaker(rows){
    rows.appendChild(slNumber());
    rows.appendChild(taskName());
    rows.appendChild(statusTask());
    return rows;
}


function slNumber(){
    let sl = document.createElement("td");
    count++;
    sl.innerText = count;
    sl.classList = "px-4 py-4 bg-purple-200  text-xl font-semibold";
    
    return sl;
}
function taskName(){
    let sl = document.createElement("td");
    sl.innerText = input.value;
    sl.classList = "px-4 py-4 bg-purple-200  text-xl font-semibold";
    input.value = "";
    return sl;
}
function statusTask(){
    let sl = document.createElement("td");
    sl.innerText = "unfinished";
    sl.classList = "px-4 py-4  bg-red-200 text-red text-xl font-semibold";
    return sl;

}





