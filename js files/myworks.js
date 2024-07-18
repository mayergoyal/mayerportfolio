const circles = document.querySelectorAll(".circle");
let activeElement = null;

circles.forEach(element => {
    element.onclick = function() {
        const textele=element.querySelector(".writeup");

        if (activeElement === null) {
            // Set this element as active
            activeElement = element;
            element.style.zIndex = "100000";
            element.style.backgroundColor = "#c8b083";
            element.style.width = "65%";
            element.style.height = "20rem";
            element.style.padding = "2rem";
            textele.style.display="flex";
        } else if (activeElement === element) {
            // Deselect the active element
            activeElement.style.zIndex = "initial";
            activeElement.style.backgroundColor = "transparent";
            activeElement.style.width = "15%";
            activeElement.style.height = "auto";
            activeElement.style.padding = "20px";
            activeElement = null; // Reset active element
            textele.style.display="none";
        } else {
            // Deselect the previously active element
            var activetext=activeElement.querySelector(".writeup");
            activeElement.style.zIndex = "initial";
            activeElement.style.backgroundColor = "transparent";
            activeElement.style.width = "15%";
            activeElement.style.height = "auto";
            activeElement.style.padding = "20px";
            activetext.style.display="none";

            // Set the new active element
            activeElement = element;
            element.style.zIndex = "100000";
            element.style.backgroundColor = "#c8b083";
            element.style.width = "65%";
            element.style.height = "20rem";
            element.style.padding = "2rem";
            textele.style.display="flex";
        }
    }
});

function work(event){
    event.preventDefault();
    const introsec = document.querySelector(".intro");
    const myworkss = document.querySelector(".myworks");
    const exp = document.querySelector(".experience");

    if (introsec) {
        introsec.style.display = "none";
        console.log("Intro section hidden");
    } else {
        console.error("Intro section not found");
    }

    if (myworkss) {
        myworkss.style.display = "flex";
        console.log("My works section hidden");
    } else {
        console.error("My works section not found");
    }

    if (exp) {
        exp.style.display = "none";
        console.log("Experience section displayed");
    } else {
        console.error("Experience section not found");
    }
}
