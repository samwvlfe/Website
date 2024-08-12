//main
window.onload = function() {
    //formatSides();
    //menuExtend();
    //shrinkLeftSide('may-overflow')
};

function menuExtendHelper(page){
    if(page == '/about.html'){
        aboutTr.style.backgroundColor = "#522D80";
    }
}

function menuExtend(){
    const path = window.location.pathname;
    //let homeTr= document.getElementById('home');
    let aboutTr = document.getElementById('about');
    menuExtendHelper(path);
}

function shrinkLeftSide(element){
    let div = document.getElementById(element);
    let picDiv = document.getElementById('pic');
    //make value of margin-top mutable
    let pic_w = parseInt(window.getComputedStyle(picDiv).width);
    let textDiv = document.getElementById('text');
    let font_s = parseInt(window.getComputedStyle(text).fontSize);
    while(div.scrollHeight > div.clientHeight){
        pic_w -= 1;
        picDiv.style.width = pic_w;
        // font_s -= 1;
        // textDiv.style.fontSize = font_s;
        console.log('decrease font size');
    }
}




//make 'View Here' tab visible for resume viewing
// function viewBox(){
//     let isHovered = false;
//     let sideBox = document.getElementById('side-box');
//     let triggerDiv = document.getElementById('trig-box-view');
//     triggerDiv.addEventListener('mouseenter', () => {
//         sideBox.style.display = 'block';
//     });
//     sideBox.addEventListener('mouseleave', () => {
//         sideBox.style.display = 'none';
//     });
// }
// //call func when DOM is loaded
// window.onload = function() {
//     viewBox();
// };