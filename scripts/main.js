var index = 0, images = [], time = 5000;

images[0] = '../img/banner1.jpg';
images[1] ='../img/banner2.jpg';
images[2] = '../img/banner3.jpg';

function change(){
    document.slider.src = images[index];
    if(index < images.length -1){
        index++
    }else{
        index = 0;
    }
    setTimeout('change()', time);
}
window.onload = change;