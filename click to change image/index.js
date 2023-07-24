let images =[
    {   id:1,
        image:'https://images.wallpaperscraft.com/image/single/beautiful_scenery_mountains_lake_93318_1280x720.jpg',
        name:'mountain'
    },
    {
        id:2,
        image:'https://images.wallpaperscraft.com/image/single/3d_photoshop_nature_14993_1280x720.jpg',
        name:'nature'
    },
    {
        id:3,
        image:'https://wallpaperaccess.com/full/537107.jpg',
        name:'road'
    },
    {
        id:4,
        image:'https://i.pinimg.com/originals/e4/f4/78/e4f47816f076661d781e823235ec1569.jpg',
        name:'sky'
    }
]

//targeting Elements
const store = document.querySelector(".storage")
// console.log(store);
const nxt = document.querySelector(".nxt-btn")
// console.log(nxt);
const prev = document.querySelector(".prev-btn")
// console.log(prev);
const img = document.querySelector(".imag");

const heading = document.querySelector(".heading")

count = 0 ;

window.addEventListener("DOMContentLoaded",()=>{
    img.src = images[count].image
    heading.innerText  = images[count].id
})

nxt.addEventListener("click",(e)=>{
count++ 
// console.log(count)
prev.style.visibility = "visible"

if(count == images.length-1){
    nxt.style.display = "none"

    // prev.style.visibility = "visibile"

}
    for(let i=0; i<images.length; i++){
    img.src = images[count].image;
    heading.innerHTML = images[count].id +" "+ images[count].name
    }
})

prev.addEventListener("click",()=>{
    count--
    nxt.style.display="block"

// console.log(count)
   if(count == 0){
    prev.style.visibility="hidden";
   }
    for(let j=0; j<images.length; j++){
        img.src = images[count].image
    heading.innerHTML = images[count].id+" "+ images[count].name

    }
})