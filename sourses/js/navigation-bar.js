//#region Progress bar
window.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const progressBar = document.querySelector(".progress-bar");
    const progress = (currentScroll / totalScroll) * 100;
    progressBar.style.width = progress + "%";
}
//#endregion

//#region Page navigation
const navButtons = document.querySelectorAll(".nav-bar__link");
navButtons.forEach(button => {
    button.addEventListener("click", scrollToSection);
});

const headerHeight = 100;
function scrollToSection(event) {
    event.preventDefault();
    let sectionClassName = '.'+this.id.split('-')[0]+'-block';  
    if(sectionClassName=='.progect-block'){
        sectionClassName = '.modern-interior-block';
    }
    if(sectionClassName=='.contact-block'){
        sectionClassName = '.footer-block';
    }
    console.log(sectionClassName);
    const section = document.querySelector(sectionClassName);
    const offsetTop = section.offsetTop-headerHeight;
    
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    })
        
    scrollAnimation();      
}
//#endregion