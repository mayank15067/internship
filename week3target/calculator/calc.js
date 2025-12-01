let input=document.getElementById("input");
let del=document.getElementById("delete");
let clear=document.getElementById("clear");
let evaluate=document.getElementById("evalu");
let value=document.getElementsByClassName("add");

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "Light Mode";
        toggleBtn.classList.remove("btn-dark");
        toggleBtn.classList.add("btn-light");
    } else {
        toggleBtn.textContent = "Dark Mode";
        toggleBtn.classList.remove("btn-light");
        toggleBtn.classList.add("btn-dark");
    }
});

 Array.from(value).forEach(element => {
    element.addEventListener("click",function(event){
        input.value=input.value+event.target.innerText;
    })
});


clear.addEventListener("click",function(event){
    input.value="";
})
del.addEventListener("click",function(event){
    input.value=input.value.slice(0,-1);
})
evaluate.addEventListener("click",function(event){
    input.value=eval(input.value);
   
})