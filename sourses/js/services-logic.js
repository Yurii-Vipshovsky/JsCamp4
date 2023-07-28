let showCount = 0;
let interiorServises;
let architectureServises;
let planingServises;

async function getData(){
    const response = await fetch('https://my-json-server.typicode.com/Yurii-Vipshovsky/JsCamp4DB/servises');
    const allServises = await response.json();
    interiorServises = allServises.filter((x) => { return x.type == "Interior Design"; });
    architectureServises = allServises.filter((x) => { return x.type == "Architecture"; });
    planingServises = allServises.filter((x) => { return x.type == "Planning"; });
    console.log(planingServises);
    createAll();
}

getData();

const servicesButtons = document.querySelectorAll(".services-block__button");
servicesButtons.forEach(button => {
    button.addEventListener("click", chargeService);
});

function chargeService(event){
    //if not same
    event.preventDefault();
    const previousButton = document.querySelector(".services-block__button.selected");
    if(previousButton!=null){
        previousButton.classList.remove("selected");
    }
    event.target.classList.add("selected");
    deleteAllElements();
    if(event.target.innerHTML == "ALL"){
        createAll();        
    }
    else{
        createServise(event.target.innerHTML);
    }
}

function createElement(elemData){
    if(showCount==5){
        return;
    }
    const element = document.querySelectorAll(".services-element")[showCount];
    const picture = document.querySelectorAll(".services-element__picture")[showCount];
    const name = document.querySelectorAll(".services-element__name")[showCount];
    const description = document.querySelectorAll(".services-element__description")[showCount];
    showCount+=1;
    name.innerHTML = elemData.name;
    description.innerHTML = elemData.description;
    let imgSrc = "images/Services/"+elemData.type.toLowerCase().split(' ').join('_')+'.png';
    picture.src=imgSrc;
    picture.alt=elemData.type;
    if(elemData.type=="Architecture"){
        element.classList.add("architecture");
    }
    element.classList.add("visible");
}

function createAll(){
    createElement(interiorServises[0]);
    createElement(architectureServises[0]);
    createElement(planingServises[0]);
}

function createServise(serviseName){
    let getDataFrom;
    if(serviseName=="INTERIOR DESIGN"){
        getDataFrom = interiorServises;
    }
    else if(serviseName=="ARCHITECTURE"){
        getDataFrom = architectureServises;
    }
    else{
        getDataFrom = planingServises;
    }
    for(let i=0;i<5&&i<getDataFrom.length;++i){
        createElement(getDataFrom[i]);
    }
}

function deleteAllElements(){
    const elements = document.querySelectorAll(".services-element");
    for(let i=0; i<showCount; i++){
        elements[i].classList.remove("visible");
        elements[i].classList.remove("architecture");
    }
    showCount=0;
}