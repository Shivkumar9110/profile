 
// HameBarGargarIcon 

let HameBarGargarIcon = document.querySelector("#hamebargaricon");


let HameBarGargarIconCloseSign= document.querySelector("#close_Icon")


HameBarGargarIcon.addEventListener("click", open);

HameBarGargarIconCloseSign.addEventListener("click",close);

function open(){
    let hamebargar= document.querySelector(".hide_magbargar");
    HameBarGargarIcon.style.visibility="hidden";
    
    HameBarGargarIconCloseSign.style.visibility="visible";

    
    

  
}


function close(){
    console.log("close funtion do work.")
    
    HameBarGargarIconCloseSign.style.display="none";

    HameBarGargarIcon.style.visibility="visible"
}

