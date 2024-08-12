gsap.registerPlugin(ScrollTrigger);
var mobileMenuOpen = false;

window.onload = function () {
  var timeline = new TimelineMax();
  timeline
    .from(".hero-bg-txt", 1, { x: 300 }, 0)
    .from(".hero-fg", 1, { scale: 1.5 }, 0)
    .from(".brand-nav", 1, { opacity: 0 }, 1)
    .from(".nav-links", 1, { opacity: 0 }, 0.75);
};

gsap.to(".separator", {
  scrollTrigger: {
    trigger: ".separator",
    start: "300 bottom",
    toggleAction: "play none none none",
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".hero-bg-txt", {
  scrollTrigger: {
    trigger: ".section-1",
    start: "top top",
    end: "bottom top",
    toggleAction: "play none none none",
    scrub: 1,
  },
  x: -300,
  duration: 2,
});

gsap.from(".swiper", {
  scrollTrigger: {
    trigger: ".swiper",
    start: "center bottom",
    toggleAction: "play none none none",
  },
  opacity: 0,
  y: 100,
  scale: 1.2,
  duration: 1,
  ease: "power1.out",
});

var underConstAnim = gsap.timeline({ repeat: -1 });
underConstAnim
  .to(".under-construction", { duration: 2, opacity: 0, stagger: 2 })
  .to(".under-construction", { duration: 2, opacity: 1, stagger: 2 });

const videos = gsap.utils.toArray("video");

videos.forEach(function (video, i) {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    onEnter: () => video.play(),
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});

//CODE For mobile menu
let mobileMenuBtn = document.getElementById("mobile-menu-btn");
let mobileMenuBtnClose = document.getElementById("mobile-menu-btn-close");
let mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.style.visibility = "visible";
  mobileMenu.style.transform = "translateY(0)";
});

mobileMenuBtnClose.addEventListener("click", () => {
  console.log("CCC");
  mobileMenu.style.visibility = "hidden";
  mobileMenu.style.transform = "translateY(-100vh)";
});

//CODE FOR THE CARROUSEL

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 80,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    enabled: false,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 499px
    478: {
      slidesPerView: 1.5,
      spaceBetweenSlides: 20,
    },
    // when window width is <= 999px
    767: {
      slidesPerView: 1.5,
      spaceBetweenSlides: 40,
    },
  },
});
