window.addEventListener('load', () => {
  
  const tl = gsap.timeline();

 
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
  });

  gsap.registerPlugin(ScrollTrigger);

  
  tl.from(".project-parent", {
    y: -20, 
    opacity: 0,
    duration: 0.5, 
    ease: "power2.out",
  })
  .from(".hello", {
    x: -30, 
    opacity: 0,
    duration: 0.5, 
    ease: "power2.out",
    stagger: 0.1, 
  }, "-=0.25")  
  .from(".im-jake-a-container", {
    x: 30, 
    opacity: 0,
    duration: 0.5, 
    delay: 0.1, 
  }, "-=0.25") 
  .from(".explore", {
    y: 20, 
    opacity: 0,
    duration: 0.5, 
    delay: 0.2, 
    ease: "power2.out",
  }, "-=0.25"); 

  gsap.utils.toArray('.slider > div').forEach((slide, index) => {
    gsap.from(slide, {
      opacity: 0,
      y: 30, 
      duration: 0.5, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: slide,
        start: 'top 80%', 
        end: 'bottom 20%', 
        scrub: 1,
        toggleActions: 'play none none reverse',
      }
    });
  });

  gsap.to(".hello", {
    y: 15, 
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    }
  });

  gsap.to(".im-jake-a-container", {
    y: 10, 
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    }
  });
});
