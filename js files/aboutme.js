
document.addEventListener('DOMContentLoaded', function (){
//about me section is just triubling me a lot , time to fix this fully
const mediaquery = window.matchMedia('(max-width: 950px)');

function changeaboutme(event) {
    // Check if the media query matches
    if (event.matches) {
        console.log("Media query matched: less than or equal to 950px");
        
        const navbar = document.querySelector(".navbar");
        const mainhead = document.querySelector(".mainheading");
        const mainpart = document.querySelector(".main");
        const footer = document.querySelector(".footer");

        navbar.style.height = "10%";
        mainhead.style.height = "10%";
        footer.style.height = "10%";
        mainpart.style.height = "70%";

        const aboutlit = document.querySelector(".aboutlit");
        const description = document.querySelector(".description");
        aboutlit.style.transform = "translateY(150px)";
        description.style.transform = "translateY(80px)";
        footer.style.transform="translateY(480px)"
        aboutlit.style.marginLeft="0";
        aboutlit.style.width="80vw";
        aboutlit.style.padding="0";
    } else {
        console.log("Media query not matched: more than 950px");

        const aboutlit = document.querySelector(".aboutlit");
        const description = document.querySelector(".description");
        aboutlit.style.transform = "translateY(-120px)";
        aboutlit.style.transform = "translate(-120px,-120px)";

        description.style.transform = "translateY(0)";
    }
}

// Add event listener for changes to the media query
mediaquery.addEventListener("change", changeaboutme);

// Initial check
changeaboutme(mediaquery);

});