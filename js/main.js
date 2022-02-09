// =================toggle menu
let menu=document.getElementById("menu");
let menuIcon=document.querySelector(".menu-icon")

menu.style.top="-1000px";

menuIcon.addEventListener("click",function(){
    if(menu.style.top=="-1000px"){
        menu.style.top="84px";
        
    }else{
        menu.style.top="-1000px";
    }
})

document.body.onscroll=function(){
    menu.style.top="-1000px";
}

// ===================header=============
let about=document.querySelector(".about");
let headerPosition=document.querySelector("header");

window.addEventListener("scroll",()=>{
    if(scrollY >= about.offsetTop + 1000){
        headerPosition.style.cssText="position:sticky;top:-1px;"
    }
})

//===============changing active class on navbar links when scroll 
let lis=document.querySelectorAll("#menu li");
let sections=document.querySelectorAll(".section")


window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach((section)=>{
        let sectionTop=section.offsetTop;
        if(scrollY >= sectionTop -200){
            current=section.getAttribute("id");
        }
    })
    lis.forEach((li)=>{
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active");
        }
    });
});

// ==========this for clicking on the works links
let worksLis=document.querySelectorAll(".works ul li")


worksLis.forEach((li)=>{
    li.addEventListener("click", (e)=>{
        // remove active class from all lis
        worksLis.forEach((li)=>{
            li.classList.remove("active");
        });
        // add active class to the current li
 e.currentTarget.classList.add("active");
});
});




// ====================Scroll to top
let upIcon=document.querySelector(".up-icon");

window.addEventListener("scroll",function() {
    if(window.scrollY >= 500){
        upIcon.style.cssText="right:20px; transform:scale(1)";
    }else{
        upIcon.style.cssText="right:-60px; transform:scale(0)";
    }
})

upIcon.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
}

// ============Progress 
let skillSec=document.querySelector(".skills");
let spans=document.querySelectorAll(".progress span");

window.addEventListener("scroll",function(){
    if( window.scrollY >= skillSec.offsetTop-300){
spans.forEach((span)=>{
    span.style.width=span.dataset.width;
})
    }
})

// ==============creat counter
let counterSec=document.querySelector(".counter");
let nums=document.querySelectorAll(".counter .box span");
let started=false;

window.addEventListener("scroll",function(){
    if(window.scrollY >=counterSec.offsetTop-400){
        if(!started){
            nums.forEach((num)=>startCount(num));
        }
        started=true;
       
    }
})

function startCount(el){
    let goal =el.dataset.goal;
    let count=setInterval(()=> {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 3000 / goal)
}


// =====================resize images

let zoomIcon=document.querySelectorAll(".portflio .box i");
let fullImgBox=document.getElementById("fullImgBox");
let fullImg=document.getElementById("fullImg");
let closeBox=document.getElementById("closeBox");

closeBox.addEventListener("click",function(){
    fullImgBox.style.display="none";
})
zoomIcon.forEach(icon=>{
    // console.log(icon.dataset.src);
    icon.addEventListener("click",function(){
        fullImgBox.style.display="flex";
        fullImg.setAttribute("src",icon.dataset.src);
    })
});


// Start works==================
let typeOfWorks=document.querySelectorAll(".works ul li");
let boxs=document.querySelectorAll(".works .portflio .box");

console.log(boxs);

typeOfWorks.forEach(el=>{
    el.addEventListener("click", ()=>{
            typeOfWorks.forEach(el=>{el.classList.remove("active-li")});
            el.classList.add("active-li");
    });
});