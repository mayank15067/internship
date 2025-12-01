let table=document.getElementById("table");
let row=document.getElementsByTagName("tr");
let input=document.getElementById("input");
let button=document.getElementById("task");
let complet=document.getElementsByClassName("complete");
let del=document.getElementsByClassName("delete");
let work=document.getElementsByClassName("work");
let status =document.getElementsByClassName("status");

table.addEventListener("click", function(event){
    let completecell = event.target.closest(".complete");
    if (completecell){ 
    let row = completecell.parentElement;  
    row.cells[2].innerText = "COMPLETE";
    return;
    
}
    
    let delcell=event.target.closest(".delete")
    if(delcell){
        let row=delcell.parentElement;
        row.remove();
        return;
    }
});

button.addEventListener("click", function(){
if(input.value==""){
    alert("ENTER TASK TO ADD ");
}
else{
    console.dir(input);
let neew = table.insertRow(-1);
let cell0=neew.insertCell(0);
let cell1=neew.insertCell(1);
let cell2=neew.insertCell(2);
let cell3=neew.insertCell(3);
cell0.classList.add("complete");
cell1.classList.add("work");
cell2.classList.add("status");
cell3.classList.add("delete");
    cell0.innerHTML='<i class="fa-solid fa-thumbs-up "></i>';
    cell1.innerText=input.value;
    cell2.innerText="PENDING"
    cell3.innerHTML='<i class="fa-solid fa-xmark"></i>';
input.value="";
}
})