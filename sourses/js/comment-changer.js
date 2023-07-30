let curentPage = 1;
const pageCount = 3;

const nextButton = document.querySelector('#testimonials-block__next-button');
const prevButton = document.querySelector('#testimonials-block__prev-button');
nextButton.addEventListener("click", nextPage);
prevButton.addEventListener("click", prevPage);

function nextPage(){
    document.querySelector('.disapear-right .disapear-left').remove('.disapear-right .disapear-left');
    if(curentPage==pageCount){
        curentPage=1;
    }
    else{
        curentPage++;
    }
    changePage(curentPage, true);
}

function prevPage(){
    if(curentPage==1){
        curentPage=pageCount;
    }
    else{
        curentPage--;
    }
    changePage(curentPage, false);
}

//boolean direction 
//if next page => true - direction from left to right
function changePage(pageNumber, direction){
    let idName = "#comment-page-"+pageNumber;
    let curentPageElem = document.querySelector(idName);
    if(direction){
        curentPageElem.classList.add("disapear-right");

    }
    else{
        curentPageElem.classList.add("disapear-left");
    }
}

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