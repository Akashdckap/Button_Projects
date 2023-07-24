console.dir(document)
// const select = document.querySelectorAll("button")
// // console.log(select)
// const selector = document.querySelector(".modal-overlay")
// // console.log(selector)
// for (let i=0; i<select.length; i++){
//     // console.log(i)
//     select[i].addEventListener("click",()=>{
//         // console.log(select[i])
//         if(selector.classList.contains("modal-overlay")){
//             selector.classList.remove("modal-overlay")
//             selector.classList.add("show")
//         }
//         else{
//             selector.classList.remove("show")
//             selector.classList.add("modal-overlay")
//         }
//     })
// }

// const select = document.querySelectorAll("button")
// const selector = document.querySelector(".modal-overlay")

// for(let i=0; i<select.length; i++){
//     select[i].addEventListener("click",()=>{
//         if(selector.classList.contains("modal-overlay")){
//             selector.classList.toggle("show")

//         }
//     })
// }

// const buttons = document.querySelectorAll("button")
// const modal = document.querySelector(".modal-overlay")

// for(let i=0; i<buttons.length; i++){
//     function click(){
//         if(modal.classList.contains("modal-overlay")){
//             modal.classList.toggle("show")
//         }
//     }
//     buttons[i].addEventListener("click",click)
// }


const btn = document.querySelector(".modal-btn")

const content = document.querySelector(".modal-overlay")

const closebtn = document.querySelector(".close-btn")

btn.addEventListener("click",function(){
    content.classList.add("show")
})
closebtn.addEventListener("click",()=>{
    content.classList.remove("show")
})