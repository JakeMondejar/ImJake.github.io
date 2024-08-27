// animation.js

window.addEventListener('load', () => {
  // Create a GSAP Timeline for pre-loader and reveal animations
  const tl = gsap.timeline({
    onComplete: () => {
      // No need to call triggerRevealAnimations separately, as animations are now part of the timeline
    }
  });

  // Add pre-loader animation to the timeline
  tl.fromTo('.loader-text span', 
      {
          y: 50, 
          opacity: 0
      }, 
      {
          y: 0, 
          opacity: 1, 
          duration: 0.5, // Reduced duration
          stagger: 0.05,
          ease: 'power2.out'
      }
  )
  .to('#preloader', {
      autoAlpha: 0, 
      duration: 0.3, // Reduced duration
      ease: 'power2.out',
      onComplete: () => {
          document.getElementById('preloader').style.display = 'none';
          document.getElementById('main-content').style.display = 'block';
      }
  })
  // Add reveal animations to the timeline
  .from(".about .frame-parent", {
    opacity: 0,
    y: 30, // Reduced movement
    duration: 1, // Reduced duration
    ease: "power3.out"
  })
  .from(".about .intro h1, .about .intro .bio", {
    opacity: 0,
    y: 30, // Reduced movement
    stagger: 0.2, // Reduced stagger
    duration: 1, // Reduced duration
    ease: "power3.out"
  }, "-=1") // Adjust overlap to maintain smooth transition
  .from(".about .bio-image-container-wrapper", {
    opacity: 0,
    x: 10,  // Reduced movement
    y: 10,  // Reduced movement
    stagger: 0.2, // Reduced stagger
    duration: 1, // Reduced duration
    ease: "power3.out"
  }, "-=1") // Adjust overlap to maintain smooth transition
  .from(".about .bio-content-wrapper", {
    opacity: 0,
    y: 30, // Reduced movement
    duration: 1, // Reduced duration
    delay: 0.5, // Reduced delay
    ease: "power3.out"
  }, "-=1") // Adjust overlap to maintain smooth transition
  .from(".footer .footer-content", {
    opacity: 0,
    y: 30,  // Reduced movement
    duration: 1, // Reduced duration
    ease: "power3.out"
  }, "-=1") // Adjust overlap to maintain smooth transition
  .from(".footer .footer-inner", {
    opacity: 0,
    y: 30,  // Reduced movement
    duration: 1, // Reduced duration
    delay: 0.25,  // Reduced delay
    ease: "power3.out"
  }, "-=1") // Adjust overlap to maintain smooth transition
  .from(".footer .location", {
    opacity: 0,
    y: 30,  // Reduced movement
    duration: 1, // Reduced duration
    delay: 0.5,  // Reduced delay
    ease: "power3.out"
  }, "-=1") // Adjust overlap to maintain smooth transition
  .from(".footer .socials", {
    opacity: 0,
    y: 30,  // Reduced movement
    duration: 1, // Reduced duration
    delay: 0.75,  // Reduced delay
    ease: "power3.out"
  }, "-=1"); // Adjust overlap to maintain smooth transition
});
