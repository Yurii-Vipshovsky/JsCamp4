const elementIsVisibleInViewport = (el, partiallyVisible = true) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

const blogElems = document.querySelectorAll(".blog-element");

const blogImageElems = document.querySelectorAll(".blog-element .image-with-bechind-border img");

blogImageElems.forEach(image => {
    image.addEventListener("mouseover", (event)=>{ 
        event.target.parentNode.parentNode.classList.add('show-content');});
});

function imagesAppearance(){
    if (elementIsVisibleInViewport(blogElems[0])) {
        blogElems[0].classList.add('show-image');
        blogElems[1].classList.add('show-image');
    }
    if (!elementIsVisibleInViewport(blogElems[0], true)) {
        blogElems[0].classList.remove('show-image');
        blogElems[1].classList.remove('show-image');
        blogImageElems[0].parentNode.parentNode.classList.remove('show-content');
        blogImageElems[1].parentNode.parentNode.classList.remove('show-content');
    }
}


// Викликаємо функцію під час завантаження сторінки
//showLatestNews();

// Викликаємо функцію під час скролінгу сторінки
window.addEventListener('scroll', imagesAppearance);