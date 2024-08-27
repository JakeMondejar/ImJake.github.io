window.addEventListener('load', () => {
  
  const tl = gsap.timeline({
    onComplete: () => {
     
    }
  });

  
  tl.fromTo('.loader-text span', 
      {
          y: 50, 
          opacity: 0
      }, 
      {
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.05,
          ease: 'power2.out'
      }
  )
  .to('#preloader', {
      autoAlpha: 0, 
      duration: 0.3, 
      ease: 'power2.out',
      onComplete: () => {
          document.getElementById('preloader').style.display = 'none';
          document.getElementById('main-content').style.display = 'block';
      }
  })
  
  .from(".about .frame-parent", {
    opacity: 0,
    y: 30, 
    duration: 1, 
    ease: "power3.out"
  })
  .from(".about .intro h1, .about .intro .bio", {
    opacity: 0,
    y: 30, 
    stagger: 0.2, 
    duration: 1, 
    ease: "power3.out"
  }, "-=1") 
  .from(".about .bio-image-container-wrapper", {
    opacity: 0,
    x: 10,  
    y: 10, 
    stagger: 0.2, 
    duration: 1, 
    ease: "power3.out"
  }, "-=1") 
  .from(".about .bio-content-wrapper", {
    opacity: 0,
    y: 30, 
    duration: 1, 
    delay: 0.5, 
    ease: "power3.out"
  }, "-=1") 
  .from(".footer .footer-content", {
    opacity: 0,
    y: 30, 
    duration: 1, 
    ease: "power3.out"
  }, "-=1") 
  .from(".footer .footer-inner", {
    opacity: 0,
    y: 30,  
    duration: 1, 
    delay: 0.25,  
    ease: "power3.out"
  }, "-=1") 
  .from(".footer .location", {
    opacity: 0,
    y: 30,  
    duration: 1, 
    delay: 0.5,  
    ease: "power3.out"
  }, "-=1") 
  .from(".footer .socials", {
    opacity: 0,
    y: 30,  
    duration: 1, 
    delay: 0.75,  
    ease: "power3.out"
  }, "-=1"); 
});
