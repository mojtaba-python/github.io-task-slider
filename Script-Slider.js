let $ = document;
let sliderImgElm = $.querySelector('img');

let prevBtn = $.querySelector('.prev');
let nextBtn = $.querySelector('.next');

let imgSrcArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg'];
let caption = ['caption 1','caption 2', 'caption 3', 'caption 4'];
let imgIndex = 0;

var numsSlide = document.getElementsByClassName('numbers')[0];
var dot = document.getElementsByClassName('dot');
var text = document.getElementById('caption');

function prevImage() {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = imgSrcArray.length - 1;
    }
    numsSlide.innerHTML = imgIndex + 1;
    sliderImgElm.setAttribute('src', imgSrcArray[imgIndex]);
    text.innerHTML=caption[imgIndex];

}

function nextImage() {
    imgIndex++;

    if (imgIndex > 3) {
        imgIndex = 0;
    }
   
    numsSlide.innerHTML = 1 + imgIndex;
    sliderImgElm.setAttribute('src', imgSrcArray[imgIndex]);
    text.innerHTML=caption[imgIndex];
}

setInterval(nextImage, 3000);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

