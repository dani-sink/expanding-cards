const imagesContainer = document.querySelector('.images__container');
const allImages = document.querySelectorAll('.image__container');
function selectImage(e){
    allImages.forEach(ele => {
        if (ele.classList.contains("active")){
            ele.classList.remove('active');
        }
        if (ele.id === e.target.id) {
            ele.classList.add('active');
        }
    })
}

imagesContainer.addEventListener('click', selectImage)