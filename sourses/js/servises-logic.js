const servicesButtons = document.querySelectorAll(".services-block__button");
servicesButtons.forEach(button => {
    button.addEventListener("click", chargeService);
});

function chargeService(event){
    console.log('clicked');
    event.preventDefault();
    const previousButton = document.querySelector(".services-block__button.selected");
    if(previousButton!=null){
        previousButton.classList.remove("selected");
    }
    event.target.classList.add("selected");

    const sectionClassName = '.'+this.id.split('-')[0]+'-block';  
    const section = document.querySelector(sectionClassName);
    const offsetTop = section.offsetTop-headerHeight;
}