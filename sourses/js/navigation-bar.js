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
    const sectionClassName = '.'+this.id.split('-')[0]+'-block';  
    const section = document.querySelector(sectionClassName);
    const offsetTop = section.offsetTop-headerHeight;

    const scrollStepsCount = 100; 
    const scrollStep = Math.abs(offsetTop - document.body.scrollTop)/100;

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    //think about ease
    async function scrollAnimation() {
        let currPos = document.body.scrollTop;
        for (let count = 0; count < scrollStepsCount; count++) {
            console.log('animation');
            if(offsetTop - document.body.scrollTop>0){
                currPos = currPos + scrollStep;
            }
            else{
                currPos = currPos - scrollStep;
            }
            console.log(currPos);
            await sleep(10);
            window.scrollTo({
                top: currPos,
                behavior: "smooth"
            })
        }
    }
    scrollAnimation();
      
}
//#endregion