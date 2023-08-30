const hideBtn = document.getElementById("toggleList");
const myList = document.querySelector(".list");
const changeBtn = document.querySelector(".change-btn");
const title = document.getElementById("title-desc")
const descInpt= document.querySelector(".desc-inpt")
const itemInpt = document.querySelector(".addItemInput")

let flag=true;

hideBtn.addEventListener("click",()=>{
    myList.classList.toggle("hide"); 


    hideBtn.textContent=myList.classList.contains("hide")?'Show List':"Hide List";
});

changeBtn.addEventListener("click",()=>{

    title.textContent=descInpt.value
    descInpt.value = ""

})

