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
    sl.classList = "px-4 py-4 bg-cyan-200 text-cyan-800 border-b-2 border-cyan-600 text-xl font-semibold text-center";
    
    return sl;
}
function taskName(){
    let sl = document.createElement("td");
    sl.innerText = input.value;
    sl.classList = "px-4 py-4 bg-cyan-200 border-b-2 border-cyan-600 text-cyan-800 text-md ";
    input.value = "";
    return sl;
}
function statusTask(){
    let sl = document.createElement("td");
    sl.innerHTML = `
    <span class="bg-red-400 px-3 border-0 py-1 rounded-full text-red-800 font-semibold finished"  >unfinished</span>
    `;
    sl.classList = " flex items-center justify-center border-b-2 border-cyan-600 bg-cyan-200 py-5";
    return sl;

}





