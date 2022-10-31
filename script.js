// loading
let load=document.getElementById("loading");


window.onload=function(){
    load.classList.add("active");

    let z=setTimeout(function(){
    load.classList.remove("active");

    },1500);
    let x=setTimeout(function(){
        lefts.classList.add("active");
    

    },1700);
    
}


// go-up
let Up=document.getElementById("go-up");
// go left
let lefts=document.getElementById("lefts");

let fill=document.querySelectorAll(".fill");

let incremnt=document.querySelectorAll("#incremnt");
console.log(incremnt)

window.onscroll=function(){
    if(window.scrollY>=0){
        setTimeout(function(){
            lefts.classList.add("active");
    
        },1600);
    }

    if(window.scrollY >= 720)
    {
        Up.classList.add("active");

    }
    else{
        Up.classList.remove("active");
    }
    
    }
    

    

Up.onclick=function(){
    window.scrollTo({top:0,behavior:"smooth"});
}

// skills

let FILL=document.querySelectorAll(".fill");
let skills=document.querySelector("#our-skills");
//stats
let stats=document.querySelector("#stats");
let number = document.querySelectorAll(".number");
let started= true;
window.addEventListener("scroll",()=>{
    if(window.scrollY >= skills.offsetTop - 300){

        FILL.forEach(function(el){
            el.classList.add("ok");
        });
    }
        if(window.scrollY >= stats.offsetTop - 200){
            if(started){
                started=false;
            number.forEach(function(el){
                let goal = el.dataset.goal;
               let start= setInterval(()=>{
                el.innerHTML=parseInt(el.innerHTML) +1;
                    if(el.innerHTML == goal){
                        clearInterval(start);
                    }
                    
                },10);
            });
        }
    }
   
});


// events

let events=document.getElementById(".events");

let letset_Event= new Date("JAN 02 2023 11:59:59").getTime();


 setInterval(()=>{
    let date =new Date().getTime();
    let diff= letset_Event - date;

    let days= Math.trunc(diff / (1000*60*60*24));
    let hrs= Math.trunc((diff % (1000*60*60*24)) / (1000*60*60));
    let min= Math.trunc((diff % (1000*60*60)) / (1000*60));
    let sec= Math.trunc((diff % (1000*60)) / (1000));

    document.querySelector(".days").innerHTML = days < 10? `0${days}`:days;
    document.querySelector(".hrs").innerHTML = hrs< 10? `0${hrs}`:hrs;
    document.querySelector(".min").innerHTML = min < 10? `0${min}`:min;
    document.querySelector(".sec").innerHTML = sec < 10? `0${sec}`:sec;

 },1000);


// articls right and gallery and featured and testimonials and team

let articls=document.getElementById("articles");
let articls_scale=document.querySelectorAll(".box-scale");

let gallery=document.getElementById("gallery");
let gallery_opacity=document.querySelectorAll(".box-opacity");


let features=document.getElementById("features");

let testimonials=document.getElementById("testimonials");
let testimonials_fillter=document.querySelectorAll(".box-fillter");

let team=document.getElementById("team");
let radios=document.querySelectorAll(".radios");

window.addEventListener("scroll",()=>{
    if(window.scrollY >= articls.offsetTop - 200){
        articls_scale.forEach((e)=>{
            e.classList.add("active");
        });
    }
    if(window.scrollY >= gallery.offsetTop - 100){
        gallery_opacity.forEach((e)=>{
            e.classList.add("show");
        });
    }
    if(window.scrollY >= features.offsetTop - 100){
        document.getElementsByClassName("left")[0].classList.add("active");
        document.getElementsByClassName("right")[0].classList.add("active");


    }
    if(window.scrollY >= testimonials.offsetTop - 100){
        testimonials_fillter.forEach((e)=>{
            e.classList.add("handle");
        });
    }
    if(window.scrollY >= team.offsetTop - 100){
        radios.forEach((el)=>{
            el.classList.add("active");
        });
    }
});

