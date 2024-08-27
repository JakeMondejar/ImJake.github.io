window.addEventListener('load', () => {
  
  const tl = gsap.timeline();

  // Faster loader text reveal
  tl.fromTo('.loader-text span', 
      {
          y: 50, 
          opacity: 0
      }, 
      {
          y: 0, 
          opacity: 1, 
          duration: 0.5, // Reduced duration
          stagger: 0.05, // Reduced stagger
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
  });

  gsap.registerPlugin(ScrollTrigger);

  // Faster reveal for project-parent and other sections
  tl.from(".project-parent", {
    y: -20, // Further reduced movement
    opacity: 0,
    duration: 0.5, // Further reduced duration
    ease: "power2.out",
  })
  .from(".hello", {
    x: -30, // Further reduced movement
    opacity: 0,
    duration: 0.5, // Further reduced duration
    ease: "power2.out",
    stagger: 0.1, // Reduced stagger
  }, "-=0.25")  // Adjusted overlap
  .from(".im-jake-a-container", {
    x: 30, // Further reduced movement
    opacity: 0,
    duration: 0.5, // Further reduced duration
    delay: 0.1, // Reduced delay
  }, "-=0.25") // Adjusted overlap
  .from(".explore", {
    y: 20, // Further reduced movement
    opacity: 0,
    duration: 0.5, // Further reduced duration
    delay: 0.2, // Reduced delay
    ease: "power2.out",
  }, "-=0.25"); // Adjusted overlap

  gsap.utils.toArray('.slider > div').forEach((slide, index) => {
    gsap.from(slide, {
      opacity: 0,
      y: 30, // Further reduced movement
      duration: 0.5, // Further reduced duration
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
    y: 15, // Further reduced movement
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    }
  });

  gsap.to(".im-jake-a-container", {
    y: 10, // Further reduced movement
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    }
  });
});
