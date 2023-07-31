const elemWidth = 200;
const elemHeight = 200;
const elemTop = 150;
const elements = document.querySelectorAll(".completed-work-block__element");
const verticalLines = document.querySelectorAll(".completed-work-block__vertical-line");
const stepUpLine = document.querySelector(".completed-work-block__step-up-line");
const stepDownLines = document.querySelectorAll(".completed-work-block__step-down-line");

function createConection(){
    let lineWidth = (elements[1].offsetLeft - (elements[0].offsetLeft + elemWidth))/2;
    for(let i=0;i<2;++i){
        stepDownLines[i].style.width = lineWidth + 'px';
        stepDownLines[i].style.left = (elements[i*2].offsetLeft + elemWidth) + 'px';
        verticalLines[i*2].style.top = (elemTop+elemHeight/2) + 'px';
    }
    for(let i=0;i<3;++i){
        verticalLines[i].style.width = lineWidth + 'px';
        verticalLines[i].style.left = (elements[i].offsetLeft + elemWidth  + lineWidth) + 'px';
    }
    verticalLines[1].style.top = (elemHeight/2) + 'px';
    stepUpLine.style.width = lineWidth + 'px';
    stepUpLine.style.left = (elements[1].offsetLeft + elemWidth) + 'px';
}

setTimeout(createConection,605);//wait for loading animation done

window.addEventListener('resize', createConection, true);