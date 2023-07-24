const heronames = [{
     
    star: "Kamal hassan",
    pattam: "ulaganayan"
},
{
    star: "Rajnikanth",
    pattam: "superstar"
},
{
    star: "surya",
    pattam: "agaram"
},
{
    star: "vijay",
    pattam: "thalapathy"
},
{
    star:"vikram",
    pattam: "chiyan"
},
{
    star: "dhanush",
    pattam: "all rounder"
},
{
    star: "Jayamravi",
    pattam: "jayam boologam"
},
{
    star:"simbu",
    pattam:"all rounder"
},
{
    star: "vijay sethupathi",
    pattam: "makkalselvan"
},
{
    star: "atharvaa",
    pattam: "banakathadi"
}]




const btn = document.querySelector(".btn")
const names = document.querySelector(".hero-names")
const title = document.querySelector(".titles")
// let num = 0
btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*heronames.length)
    // num++
    names.innerText = heronames[random].star
    title.innerText = heronames[random].pattam
})
