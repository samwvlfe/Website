function showMeStuff(){
    let image = document.querySelector('.leftside img');
    image.style.width = '300px';
    image.style.width = '350px';
    image.style.marginLeft = '15.5vw';
    image.style.marginTop = '8vh';
}

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('Me');
    homeButton.onclick = showMeStuff()
});

//make left side of screen bigger for menu items
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if(path != '/index.html'){
        let leftSide = document.querySelector('.leftSide');
        leftSide.style.width = '70vw';
        let rightSide = document.querySelector('rightSide');
        rightSide.style.width = '30vw';
        let menu = document.querySelector('menu');
        menu.style.marginLeft = '15vw';
    }
});
