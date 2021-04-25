const images = document.querySelectorAll('.img-gallery')
const imagesLight = document.querySelector('.add-img')
const contLight = document.querySelector('.image-light')
const down1 = document.querySelector('.open');

images.forEach(image=>{
    image.addEventListener('click', ()=>{
        showImg(image.getAttribute('src'))
    })
})

contLight.addEventListener('click', (e)=>{
    if(e.target!==imagesLight){
        contLight.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
        down1.style.opacity = '1'
    }
})

const showImg = (image)=>{
    imagesLight.src = image;
    contLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    down1.style.opacity = '0'
}