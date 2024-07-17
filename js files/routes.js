const aboutmenav=document.querySelector(".aboutmenav");
const myworksnav=document.querySelector(".experiencenav");
const contactnav=document.querySelector(".contactnav");
const experiencenav=document.querySelector(".experiencenav");
aboutmenav.onclick=function(){
    let works=myworksnav;
    works.style.display="none";
    let contacts=contactnav;
    contacts.style.display="none";
    let exp=experiencenav;
    exp.style.display="none";
    let about=aboutmenav;
    about.style.display="flex";

}
myworksnav.onclick=function(){
    let about=aboutmenav;
    about.style.display="none";
    let exp=experiencenav;
    exp.style.display="none";
    let contacts=contactnav;
    contacts.style.display="none";
    let work=myworksnav;
    work.style.display="flex";
}
contactnav.onclick=function(){
    let about=aboutmenav;
    about.style.display="none";
    let exp=experiencenav;
    exp.style.display="none";
    let works=myworksnav;
    works.style.display="none";
    let contacts=contactnav;
    contacts.style.display="flex";

}
experiencenav.onclick=function(){
    let works=myworksnav;
    works.style.display="none";
    let contacts=contactnav;
    contacts.style.display="none";
    let about=aboutmenav;
    about.style.display="none";
    let exp=experiencenav;
    exp.style.display="flex";
}
