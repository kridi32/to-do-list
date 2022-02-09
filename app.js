const tr = document.getElementById("tr");
const td = document.getElementById("data");
td.addEventListener("click", function(){
    let ourTd = document.createElement("td");
    ourTd.classList = "px-12 bg-red-200 text-2xl font-semibold border-b-2 border-red-600";
    ourTd.style.margin = "20px 30px";
    ourTd.innerText = "other";
    tr.appendChild(ourTd);
});