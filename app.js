const hideBtn = document.getElementById("toggleList");
const myList = document.querySelector(".list");
const changeBtn = document.querySelector(".change-btn");
const title = document.getElementById("title-desc");
const descInpt= document.querySelector(".desc-inpt");
const itemInpt = document.querySelector(".addItemInput");
const addBtn = document.querySelector(".addItemButton")
const listContainer = document.querySelector(".list-container")
const upBtn= document.querySelector(".up")

let flag=true;

hideBtn.addEventListener("click",()=>{
    myList.classList.toggle("hide"); 


    hideBtn.textContent=myList.classList.contains("hide")?'Show List':"Hide List";
});

changeBtn.addEventListener("click",()=>{

    title.textContent=descInpt.value
    descInpt.value = ""

})

addBtn.addEventListener("click",()=>{
    let newItem = document.createElement("li");
    newItem.innerHTML = `${itemInpt.value}<button class="up">Up</button><button class="down">Down</button><button class="remove">Remove`;
    listContainer.append(newItem)
    itemInpt.value="";

})

