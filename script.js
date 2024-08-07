//make left side of screen bigger for menu items
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    let leftSide = document.querySelector('.leftSide');
    let rightSide = document.querySelector('.rightSide');
    if(path != '/index.html'){
        leftSide.style.width = '70%';
        rightSide.style.width = '30%';
    }
    if(path === '/about.html'){
        console.log("in about")
        leftSide.style.backgroundColor = '#00374e';
    }
    else{
        let homeButton = document.querySelector('.Me');
        homeButton.style.display = 'none';
    }
});

//add content to about page
// function createDiv(){
//     let textDiv = document.createElement('div');
//     textDiv.classList('')
// }