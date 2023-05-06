const screenWidth = window.screen.width;

console.log(screenWidth);

if (screenWidth <= 576) {
    //smartphone
} else if (screenWidth > 576 && screenWidth <= 768) {
    //tablet
} else {
    //large
}
