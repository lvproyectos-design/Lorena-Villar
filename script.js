const image = document.getElementById('framein');
let lastScrollTop = window.scrollY;
let isTurned = false;

function isInCenterViewport(el) {
    const rect = el.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;

    const tolerance = 50;
    return Math.abs(elCenter - viewportCenter) < tolerance;
}

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (isInCenterViewport(image)) {
        if (currentScroll > lastScrollTop && !isTurned) {
            image.style.transform = 'translate(-50%, calc(-50% - 60px)) rotate(-15.1deg)';
            isTurned = true;
        } else if (currentScroll < lastScrollTop && isTurned) {
            image.style.transform = 'translate(-50%, -50%) rotate(0deg)';
            isTurned = false;
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


const titles = ["naturecol", "dimension", "bookie"];
const lil_text = ["UX/UI", "UX/UI", "UX/UI PROCESS"];
const big_text = ["PROCESS", "PROCESS", "CODE"];

const full_descriptions = ["Naturecol is an ideal app for those who want to lead a healthy lifestyle through nutrition. It offers articles on natural remedies, protocols for certain conditions, a personalized user follow-up plan, and access to a supplement store.", "This landing page creatively and visually showcases a selection of 3D renders developed by the Dimension.<br><br>The entire design carefully follows modern and minimalist style guidelines, prioritizing visual harmony, usability, and intuitive navigation that reinforces the agency’s brand identity.", "Tired of seeing your books collect dust on the shelf, but still dreaming of reading that one special book?<br><br>Bookie is an app that lets you exchange books for free with other users, giving your books a new life while finally getting your hands on that book you've been wanting to read."];
const short_descriptions = [
    "Naturecol helps you live healthy through nutrition.",
    "Landing with 3D renders in a clean, modern style.",
    "Exchange books for free and find your next read."
];

const extra_texts = ["HEALTH BEGINS WITH NATURAL CHOICES", "DISCOVER DESIGN THROUGH DIMENSION", "IF YOU DON’T READ IT UPLOAD IT"];
const view_more_links = ["naturecol.html", "dimension.html", "bookie.html"];
let currentIndex = 0;

const imageDiv = document.querySelector(".image");
const phone = document.getElementById("phone");
const side_img = document.querySelector(".side_img");
const titleEl = document.getElementById("project-title");

const lil = document.getElementById("lil");
const big = document.getElementById("big");

const project_description = document.getElementById("project-description");
const useShort = window.innerWidth <= 400;

const extra_text = document.getElementById("extra_text");
const view_more = document.getElementById("view_more");

const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

const nextBtnMobile = document.getElementById("next-btn-mobile");
const backBtnMobile = document.getElementById("back-btn-mobile");

const backgrounds = {
    naturecol: "url('img/work/naturecol-bg.png')",
    dimension: "url('img/work/dimension_bg.png')",
    bookie: "url('img/work/bookie_bg.png')"
};

const phones = {
    naturecol: "img/work/naturecol-phone.png",
    dimension: "img/work/dimension-phone.png",
    bookie: "img/work/bookie-phone.png"
};

const side_imgs = {
    naturecol: "url('img/work/naturecol.png')",
    dimension: "url('img/work/dimension.png')",
    bookie: "url('img/work/bookie.png')"
};


function smoothScrollToTop(duration = 1000) {
  const start = window.scrollY;
  const startTime = performance.now();

  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}



function updatePhotos() {
    const currentTitle = titles[currentIndex];
    imageDiv.style.backgroundImage = backgrounds[currentTitle] || "none";
    phone.src = phones[currentTitle] || "";
    side_img.style.backgroundImage = side_imgs[currentTitle] || "none";
}

function updateProject() {
    titleEl.textContent = titles[currentIndex];
    smoothScrollToTop(1000);
}

[nextBtn, nextBtnMobile].forEach(btn =>
    btn?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % titles.length;
        titleEl.textContent = titles[currentIndex];
        lil.textContent = lil_text[currentIndex];
        big.textContent = big_text[currentIndex];


        const isSmallScreen = window.innerWidth <= 400;
        const description = isSmallScreen
            ? short_descriptions[currentIndex]
            : full_descriptions[currentIndex];
        project_description.innerHTML = description;

        extra_text.textContent = extra_texts[currentIndex];
        view_more.href = view_more_links[currentIndex];

        updatePhotos();
        updateProject();
    })
);

[backBtn, backBtnMobile].forEach(btn =>
    btn?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + titles.length) % titles.length;
        titleEl.textContent = titles[currentIndex];
        lil.textContent = lil_text[currentIndex];
        big.textContent = big_text[currentIndex];


        const isSmallScreen = window.innerWidth <= 400;
        const description = isSmallScreen
            ? short_descriptions[currentIndex]
            : full_descriptions[currentIndex];
        project_description.innerHTML = description;

        extra_text.textContent = extra_texts[currentIndex];
        view_more.href = view_more_links[currentIndex];

        updatePhotos();
        updateProject();
    })
);



window.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        if (cursor) {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    });
});


const scrollUp = document.getElementById("scroll-up");
scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

