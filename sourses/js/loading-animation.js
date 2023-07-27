window.onload = function () {
    window.setTimeout(function () {
        const body = document.querySelector("body");
        const animationElement = document.querySelector(".loading-animation");
        animationElement.remove();
        body.classList.remove("overflow-hidden");
    }, 500);
}
