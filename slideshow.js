let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.SeeMore');
let container = document.querySelector('.container');
let listHTML = document.querySelector('.container .list');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceptClick;
const showSlider =(type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    container.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.container .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        container.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast]);
        container.classList.add('prev');
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
}

seeMoreButtons.forEach(button => {
    button.onclick = function(){
        container.classList.add('showDetail');
    }
})
backButton.onclick = function(){
    container.classList.remove('showDetail');
}