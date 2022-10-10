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





