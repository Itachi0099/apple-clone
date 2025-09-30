const { Parallax } = require("@react-spring/parallax");

window.addEventListener("load", () => {
  gsap.from("#navbar", {
    y: -80,          
    opacity: 0,      
    duration: 1,     
    ease: "power3.out"
  });

  gsap.to("#iphoneTitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5
  });

  gsap.to("#iphonePrice", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.8
  });

  gsap.to("#iphoneDate", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.1
  });
    gsap.to("#iphoneImg", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.1
  });
});

<div class="parallax-container relative">
  <img src="assets/3.png" alt="iPhone Air" class="max-w-full h-auto parallax-image" />
</div>

window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax-image');
  let offset = window.pageYOffset;
  let speedFactor = 1.0; // ← adjust this to control parallax speed
  parallax.style.transform = `translateY(${offset * speedFactor}px)`;
});


window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    const parallax = document.querySelector('.parallax-image');
    let offset = window.pageYOffset;
    let speedFactor = 0.3;
    parallax.style.transform = `translateY(${offset * speedFactor}px)`;
  });
});
// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

// Apply parallax effect to elements with the 'parallax-layer' class
gsap.utils.toArray(".parallax-layer").forEach(layer => {
  const speed = parseFloat(layer.getAttribute("data-speed")) || 1;

  gsap.to(layer, {
    yPercent: -100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: layer,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true
    }
  });
});
