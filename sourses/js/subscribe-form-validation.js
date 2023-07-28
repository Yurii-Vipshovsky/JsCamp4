const form = document.querySelector(".subscribe-form");

form.addEventListener("submit", formValidation);

function formValidation(event){
    event.preventDefault();
    const firstname = document.getElementById("firstname");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const letters = /^[A-Za-z]+$/;
    let findEror = false;
    let errorText = "";
    if(!firstname.value.match(letters))
    {
        errorText+="Invalid data in first name! Can be only Letters!<br/>";
        firstname.classList.add("error-input");
        setTimeout(()=>{firstname.classList.remove("error-input");}, 5000);
        findEror = true;
    }
    if(!surname.value.match(letters))
    {
        errorText+="Invalid data in surname! Can be only Letters!";
        surname.classList.add("error-input");
        setTimeout(()=>{surname.classList.remove("error-input");}, 5000);
        findEror = true;
    }
    if(findEror){
        const errorInfo = document.querySelector(".subscribe-form__error-info");
        errorInfo.innerHTML=errorText;
        setTimeout(()=>{errorInfo.innerHTML='';}, 5000);
        return;
    }
    if (localStorage) {
        localStorage.setItem('firstname', firstname.value);        
        localStorage.setItem('surname', surname.value);        
        localStorage.setItem('email', email.value);
    } else {
        document.cookie = `firstname=${firstname.value}; surname=${surname.value}; email=${email.value}`;
    }
    if(firstname.value=="Sigma"){
        const sigmaHello = document.querySelector(".sigma-hello");
        sigmaHello.classList.remove("hidden");
        const body = document.querySelector("body");
        body.classList.add("overflow-hidden");
        setTimeout(()=>{sigmaHello.classList.add("hidden");
                        body.classList.remove("overflow-hidden");}, 5000);
    }
}