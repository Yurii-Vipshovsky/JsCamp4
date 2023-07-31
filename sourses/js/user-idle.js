const timeThreshold = 60000;

let timeoutId = setTimeout(showPopup, timeThreshold);

function showPopup() {
    let timeoutAnswerId = setTimeout(()=>{window.close()},timeThreshold);
    if (confirm("You stil there?")) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(showPopup, timeThreshold);
        clearTimeout(timeoutAnswerId);
    } else {
        window.close();
    }
}

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
document.addEventListener("scroll", resetTimer);

function resetTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(showPopup, timeThreshold);
}