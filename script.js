gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  var timeline = new TimelineMax();
  timeline
    .from(".hero-bg-txt", 1, { x: -300 }, 0)
    .from(".hero-fg", 1, { scale: 1.5 }, 0)
    .from(".brand-nav", 1, { opacity: 0 }, 0.5)
    .from(".nav-links", 1, { opacity: 0 }, 1);
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
  x: 300,
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
  ease: "power1.out"
});

const videos = gsap.utils.toArray('video')

videos.forEach(function(video, i) {
    
  ScrollTrigger.create({
    trigger: video,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => video.play(),
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
  
})

//CODE FOR THE CARROUSEL

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    enabled: false
  },
});