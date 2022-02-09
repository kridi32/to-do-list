let data = document.getElementById("dat");
let input = document.getElementById("inputText");
let tableBody = document.getElementById("tableBody");
let count = 0;


data.addEventListener("click", function(){
  let singleTask = document.createElement("tr");
    tableBody.appendChild(trMaker(singleTask));
    let gans  = document.getElementsByClassName("finished");
    for(let gan of gans){
        gan.addEventListener("click", function (){
            gan.innerText = "finished"; 
            gan.classList = "bg-green-400 px-3 py-1 rounded-full text-green-800 font-semibold ";
        });
    }
    
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
    sl.classList = "px-4 py-4 bg-orange-200  text-xl font-semibold text-center";
    
    return sl;
}
function taskName(){
    let sl = document.createElement("td");
    sl.innerText = input.value;
    sl.classList = "px-4 py-4 bg-orange-200  text-xl font-semibold";
    input.value = "";
    return sl;
}
function statusTask(){
    let sl = document.createElement("td");
    sl.innerHTML = `
    <span class="bg-red-400 px-3 py-1 rounded-full text-red-800 font-semibold finished"  >unfinished</span>
    `;
    sl.classList = " flex items-center justify-center  bg-orange-200 py-4 ";
    return sl;

}





