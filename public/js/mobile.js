document.getElementsByClassName("menu")[0].addEventListener("click",function (){
    document.getElementsByClassName("menu")[0].classList.toggle("display-none");
    document.getElementsByClassName("close")[0].classList.toggle("flex-last");
    for(var i=0;i<document.getElementsByClassName("link").length;i++){
        document.getElementsByClassName("link")[i].classList.toggle("flex-c");
    }    
})
document.getElementsByClassName("close")[0].addEventListener("click",function (){
    document.getElementsByClassName("close")[0].classList.toggle("flex-last");
    document.getElementsByClassName("menu")[0].classList.toggle("display-none");
    for(var i=0;i<document.getElementsByClassName("link").length;i++){
        document.getElementsByClassName("link")[i].classList.toggle("flex-c");
    }
})