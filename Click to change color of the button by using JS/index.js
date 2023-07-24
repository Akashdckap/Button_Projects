// const btn = document.querySelectorAll(".btn")


// for(let i=0; i<btn.length;i++){

//     function clicked(){
//         btn[i].classList.toggle("changingcolors")
//         // alert("Hi friend")
        
//     }
//     btn[i].addEventListener("click",clicked)



// }
let btns = document.querySelectorAll("button")
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",(e)=>{
        for(let j=0;j<btns.length;j++){
            btns[j].classList.remove("changingcolors")
        }
        e.target.classList.add("changingcolors")
    })
}






// const selecting = document.querySelector("ul")
// const create = document.createElement("button")
// create.innerText="click"
// selecting.append(create)


// function change(){
//     create.classList.toggle("changingcolors")
//     // alert("Hi friend")
// }
// create.addEventListener("click",change)

