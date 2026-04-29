

const add=document.querySelector("button");
const subContainer=document.querySelector(".sub-container");
const input =document.querySelector("input");
const all=document.querySelector(".all")

const completedTask=document.querySelector(".completed-task")
const totalTask=document.querySelector(".total-list")
const progressBar=document.querySelector(".progress")



add.addEventListener("click",()=>{
    if (input.value==="")return;

    const getValue=input.value;

let element=document.createElement("li");


 element.innerHTML=`${getValue}<i class="fa-solid fa-calendar-xmark"></i>`
 subContainer.appendChild(element)
 input.value=""
 overAllProgress();

 


 

});

subContainer.addEventListener("click",(event)=>{
   if(event.target.classList == "fa-solid fa-calendar-xmark"){
   event.target.parentElement.remove();
   overAllProgress();
   }

else if (event.target.closest("li")){
    event.target.classList.toggle("checked");
event.target.classList.toggle("line")
overAllProgress();
}
 

});

const overAllProgress=()=>{
    const allTasks=document.querySelectorAll(".sub-container li");
    const checkedTasks=document.querySelectorAll(".sub-container li.checked");
    const progressText=document.querySelector(".progress-bar div>p")

const total=allTasks.length;
const completed=checkedTasks.length

completedTask.textContent=completed;
totalTask.textContent=total;

const percent=total===0 ? 0 :(completed/total)*100;
progressBar.value=percent;

if(progressBar.value ===100){
    progressText.textContent="You have completed the tasks";

}
else{
    progressText.textContent="keep trying"
}




}















 

