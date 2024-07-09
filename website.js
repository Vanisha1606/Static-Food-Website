let gallery=document.querySelectorAll(".fooditems");
let div;
gallery.forEach((item)=>{
item.addEventListener("mouseover",()=>{
    item.style.display="non";
     div=document.createElement("div");
    div.style.backgroundColor="white";
})
})
item.addEventListener("mouseout",()=>{
    item.style.display="none";
     div=document.createElement("div");
    div.style.backgroundColor="white";
})
