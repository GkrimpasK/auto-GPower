const reveal = document.querySelector('.reveal')
const source = document.querySelector('#carimg')
const img = document.querySelector('#carimg')
const buttons = document.querySelectorAll("[data-carousel-button]") 
const observeroptions = {
    root: null, 
    rootmargin: '0px',
    threshold: 0.1
};

const carNames1 = ['bmwM2.webp','bmwCabrio.webp','bmwCabrio2.webp',
                  'bmw220d.webp','bmwX.webp','miniBlack.webp','miniYellow.webp'] 

const carNames2 = ['bmwM2.png','bmwCabrio.png','bmwCabrio2.png',
                  'bmw220d.png','bmwX.png','miniBlack.png','miniYellow.png'] 

const randomName1 = carNames1[Math.floor(Math.random() * carNames1.length)];
const randomName2 = carNames2[Math.floor(Math.random() * carNames2.length)];

source.srcset = `./images/${randomName1}`
img.src = `./images/${randomName2}`

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex =  slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

const onIntersect = (entries) => {
    if(entries[0].isIntersecting){
        entries[0].target.classList.add('active')
    }

    else{
        entries[0].target.classList.remove('active')
    }
}

const observer = new IntersectionObserver(onIntersect, observeroptions);

observer.observe(reveal)