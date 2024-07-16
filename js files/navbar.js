const sidebutton=document.querySelector(".sidebutton");
var flag=false;
sidebutton.onclick=function(){
    const popoutmenu=document.querySelector(".popoutmenu");
    if(flag==false)
    {popoutmenu.style.display="flex";
        flag=true;
    }
    else{
        popoutmenu.style.display="none";
        flag=false;
    }
}