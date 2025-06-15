const imagesContainer = document.querySelector('.images__container');
const allImages = document.querySelectorAll('.image__container');
function selectImage(e){

    // If what we clicked was not a card, do nothing
    if (e.target.className !== 'image__container') return;

    // For each card
    allImages.forEach(ele => {

        // If it is the card we clicked
        if (ele.id === e.target.id) {

            // And it wasn't already expanded
            if (!ele.classList.contains("active")){

                // Expand it
                ele.classList.add('active');
            } // Otherwise, do nothing

            // Go to the next card
            return;
        }

        // If it wasn't the card we clicked

        // And the card was already expanded
        if (ele.classList.contains("active")){

            // Shrink it
            ele.classList.remove('active');
        }
    })
}

imagesContainer.addEventListener('click', selectImage)