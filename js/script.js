
document.querySelectorAll('.imageContainer .image img').forEach(myimage => {
    myimage.onclick = () => {
        const popupImageContainer = document.querySelector('.popupImage');
        const popupImage = popupImageContainer.querySelector('img');
        popupImage.src = myimage.getAttribute('src');
        popupImageContainer.style.display = 'block';
        popupImageContainer.style.zIndex = 200;
    };
});

document.querySelector('.popupImage span').onclick = () => {
    document.querySelector('.popupImage').style.display = 'none';
};



const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting)
        {
            entry.target.classList.add('showSlide');
        }
        else
        {
            entry.target.classList.remove('showSlide')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hideSlide');
hiddenElements.forEach((el) => slideObserver.observe(el));


const blurredObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        {
            if (entry.isIntersecting)
            {
                entry.target.classList.add('showBlur');
            }
            else
            {
                entry.target.classList.remove('showBlur');
            }
        }
    })
})

const blurredElements = document.querySelectorAll('.hideBlur');
blurredElements.forEach((el) => blurredObserver.observe(el));

