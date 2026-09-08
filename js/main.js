const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from(".hero-avatar", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" });
  gsap.from(".hero h1", { opacity: 0, y: 20, duration: 0.8, delay: 0.15, ease: "power2.out" });
  gsap.from(".tagline", { opacity: 0, y: 20, duration: 0.8, delay: 0.3, ease: "power2.out" });
  gsap.from(".btn", { opacity: 0, y: 20, duration: 0.8, delay: 0.45, ease: "power2.out" });

  // Scroll reveals for each section
  document.querySelectorAll("section:not(.hero)").forEach((section) => {
    gsap.from(section.children, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });
  });

  // Project cards lift on scroll into view
  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
  });
}
