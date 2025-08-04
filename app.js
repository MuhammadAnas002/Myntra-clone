const slides = document.getElementById("slides");
const totalSlides = 6;
let current = 0;
let autoSlide;
const buttonsContainer = document.getElementById("buttons");

// create a button

for (let i = 0; i < totalSlides; i++) {
    const btn = document.createElement("button");
    btn.classList.add("dot-btn");
    btn.addEventListener("click", () =>
        jumpToSlide(i));
    buttonsContainer.appendChild(btn);
}

const buttons = document.querySelectorAll(".dot-btn-div button");

const updateButton = () => {
    buttons.forEach((btn, index) => {
        btn.classList.toggle("active",
            index === current
        )
    });
}

const goToSlide = (index, fast = false) => {
    slides.style.transition = fast ?
        "transform 0.2s ease-in-out" :
        "transform 0.6s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;
    current = index;
    updateButton();
}

const autoPlay = () => {
    autoSlide = setInterval(() => {
        let next = (current + 1) % totalSlides;
        goToSlide(next);
    }, 3000);
}

const jumpToSlide = (target) => {
    clearInterval(autoSlide);
    if (target === current) {
        autoPlay();
        return;
    }


    const step = target > current ? 1 : -1;
    let intermediate = current;

    const animationPath = () => {
        intermediate += step;
        goToSlide(intermediate, true);
        if (intermediate !== target) {
            setTimeout(animationPath, 100);
        } else {
            autoPlay();
        }
    }
    animationPath();
}

updateButton();
goToSlide(0);
autoPlay();

//homeimgs-2 or product imges rising star

const slides2 = document.getElementById("slides-2");
const totalSlides2 = 3;
let current2 = 0;
let autoSlide2;
const buttonsContainer2 = document.getElementById("product-btn");

// create a button

const updateButton2 = () => {
    buttons.forEach((btn, index) => {
        btn.classList.toggle("active",
            index === current2
        )
    });
}

for (let i = 0; i < totalSlides2; i++) {
    const btn = document.createElement("button");
    btn.classList.add("dot-btn");
    btn.addEventListener("click", () =>
        jumpToSlide2(i));
    buttonsContainer2.appendChild(btn);
}

const goToSlide2 = (index, fast = false) => {
    slides2.style.transition = fast ?
        "transform 0.2s ease-in-out" :
        "transform 0.6s ease-in-out";
    slides2.style.transform = `translateX(-${index * 100}%)`;
    current2 = index;
    updateButton2();
}

const autoPlay2 = () => {
    autoSlide2 = setInterval(() => {
        let next = (current2 + 1) % totalSlides2;
        goToSlide2(next);
    }, 2000);
}

const jumpToSlide2 = (target) => {
    clearInterval(autoSlide2);
    if (target === current2) {
        autoPlay2();
        return;
    }


const step2 = target > current2 ? 1 : -1;
let intermediate2 = current2;

const animationPath2 = () => {
    intermediate2 += step2;
    goToSlide2(intermediate2, true);
    if (intermediate2 !== target) {
        setTimeout(animationPath2, 100);
    } else {
        autoPlay2();
    }
}
animationPath2();
}

updateButton2();
goToSlide2(0);
autoPlay2();