let accordion = document.getElementsByClassName("accordionMenu");
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("activeAccordionMenu");

        let arrowPosition = this.firstElementChild;
        let panelText = this.nextElementSibling;
        if (panelText.style.display == "block") {
            panelText.style.display = "none";
            panelText.style.borderBottom = "none";
            arrowPosition.style.transform = "rotate(0deg)";
        } else {
            panelText.style.display = "block";
            panelText.style.borderBottom = "2px solid hsl(240, 5%, 91%)";
            arrowPosition.style.transform = "rotate(180deg)";
        }
    });
}