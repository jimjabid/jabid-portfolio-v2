import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextJS from "./SplitTextJS";

gsap.registerPlugin(ScrollTrigger);

export const loader = () => {
  const loaderTimeline = gsap
    .timeline()
    .to(".loading__text", {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(
      ".loader",
      {
        width: "100%",
        duration: 1.5,
        // ease: "slow(0.1, 0.1, false)",
        ease: "power3.out",
      },
      ">"
    )
    .to(
      ".loader",
      {
        transform: "scale(10,1)",
        duration: 0.5,
      },
      ">+=0.1"
    )
    .to(
      ".loading__text",
      {
        opacity: 0,
        yPercent: -400,
        duration: 0.5,
        // ease: "slow(0.1, 0.1, false)",
        ease: "power3.out",
      },
      "<+=0.35"
    )
    .to(
      ".block-top",
      {
        yPercent: -100,
        duration: 1,
        ease: "power3.out",
      },
      "<+=0.10"
    )
    .to(
      ".block-bottom",
      {
        yPercent: 100,
        duration: 1,
        ease: "power3.out",
      },
      "<"
    )
    .to(
      ".blocks",
      {
        display: "none",
      },
      ">+=0.45"
    );

  //4,85

  return loaderTimeline;
};

export const home = () => {
  // HERE STARTS THE ANIMATION FOR THE HOME TITLES
  const titles = document.querySelectorAll(".home__name-change");

  var titleTL = gsap.timeline({
    repeat: -1,
  });

  titles.forEach((title) => {
    const splitTitle = new SplitTextJS(title);

    titleTL
      .from(
        splitTitle.chars,
        { y: 16, opacity: 0, rotateX: -90, stagger: 0.02 },
        "<0.8"
      )
      .to(
        splitTitle.chars,
        { y: -16, opacity: 0, rotateX: 90, stagger: 0.02 },
        "<2"
      );
  });

  // HERE STARTS THE LOAD REVEAL ANIMATION FOR THE BG

  const canvass = document.querySelectorAll("#myThreeJsCanvas");

  gsap.from(canvass, {
    duration: 2,
    opacity: 0,
    delay: 2.9,

    ease: "back.out",
  });

  // HERE STARTS THE LOAD REVEAL ANIMATION FOR THE NAV
  const navItem = document.querySelectorAll(".nav__item");

  gsap.from(navItem, {
    duration: 2,
    yPercent: -100,
    opacity: 0,
    delay: 2.9,
    stagger: 0.2,
    ease: "back.out",
  });

  // HERE STARTS THE LOAD REVEAL ANIMATION FOR THE RIGHT SIDE OF THE HOME PAGE ON
  // LARGE SCREENS
  const homeLeftCol = document.querySelector(".home__data");
  const childElementsLeftCol = homeLeftCol.querySelectorAll(":scope > *");

  gsap.from(childElementsLeftCol, {
    duration: 2,
    yPercent: -100,
    opacity: 0,
    delay: 2.9,

    stagger: 0.2,
    ease: "back.out",
  });

  const homeRightCol = document.querySelector(".home__img-container");
  gsap
    .timeline()
    .from(homeRightCol, {
      duration: 2,
      yPercent: 100,
      opacity: 0,
      delay: 2.9,
      ease: "power3.out",
    })
    .from(
      "#card--design",
      {
        transformOrigin: "center",
        rotateX: 360,
        duration: 1.5,
        opacity: 0,
        yPercent: 100,
        ease: "back.out",
      },
      "<+=0.5"
    )
    .from(
      "#card--development",
      {
        transformOrigin: "center",
        rotateX: 360,
        duration: 1.25,
        opacity: 0,
        yPercent: 100,
        ease: "back.out",
      },
      "<+=0.25"
    );
  // HERE STARTS SCROLL paralax animation for home elements

  const homeContainer = document.querySelector(".home__container");
  const homeSection = document.querySelector(".home");

  gsap.to(homeContainer, {
    duration: 3.25,
    yPercent: -100,
    // opacity: 0,
    ease: "powe3.out",
    scrollTrigger: {
      trigger: homeSection,
      start: "60% 20%",
      // end: "bottom top",
      end: () => "+=" + homeSection.offsetHeight,
      scrub: true,
    },
  });
};

export const about = () => {
  // Here starts scroll reveal animation for the about title
  const titleContainer = document.querySelector(".about > .title__container");
  const aboutTitle = document.querySelectorAll(" .about-title");

  gsap.from(aboutTitle, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 70%",
      end: "top 50%",
      scrub: true,
    },
  });

  // Here starts Scroll Reveal animation for cards within the about section
  const aboutCards = document.querySelectorAll(".about__box");
  const cardSkills = document.querySelectorAll("#skills--box");
  const aboutContainer = document.querySelector(".about__container");

  gsap.to(aboutCards, {
    duration: 2.25,
    yPercent: -100,
    opacity: 1,
    ease: "powe3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 70%",
      end: "top top",
      scrub: true,
    },
  });
  gsap.from(cardSkills, {
    duration: 3.5,
    yPercent: 100,
    opacity: 0,
    ease: "powe3.out",
    scrollTrigger: {
      trigger: aboutContainer,
      start: "center 60%",
      end: "top top",
      // end: () => "-=" + aboutContainer.offsetHeight,
      scrub: true,
      // markers: true,
    },
  });

  // HERE STARTS SCROLL paralax animation for about elements

  const aboutSection = document.querySelector(".about");

  gsap.to(aboutContainer, {
    duration: 3.25,
    yPercent: -100,
    // opacity: 0,
    ease: "powe3.out",
    scrollTrigger: {
      trigger: aboutSection,
      start: "60% 20%",
      // end: "bottom 20%",
      end: () => "+=" + aboutSection.offsetHeight,
      scrub: true,
    },
  });
};

export const projects = () => {
  // HERE STARTS THE REVEAL ANIMATION FOR PROJECT´S SECTION

  const projectsTitleContainer = document.querySelector(
    ".projects > .title__container"
  );
  const projectTitle = document.querySelectorAll(" .project-title");

  gsap.from(projectTitle, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: projectsTitleContainer,
      start: "top 70%",
      end: "top 60%",
      scrub: true,
    },
  });

  const sliderItem = document.querySelectorAll(".slider__item");
  const projectContainer = document.querySelector(".projects__container");

  gsap.from(sliderItem, {
    duration: 3.5,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: projectContainer,
      start: "top 70%",
      end: "top 40%",
      scrub: true,
    },
  });

  // HERE STARTS THE ANIMATION FOR THE PROJECT´S SLIDER
  const projectsContent = document.querySelectorAll(".slider__img_wrapper");
  const projects = document.querySelectorAll(".project__hover");

  gsap.set(projects, { opacity: 0 });

  projectsContent.forEach((project) => {
    const animation = gsap.to(project.querySelector(".project__hover"), {
      paused: true,
      opacity: 1,
      scaleY: 1,
      duration: 0.5,
      ease: "power4.out",
    });
    project.addEventListener("mouseenter", () => animation.play());
    project.addEventListener("mouseleave", () => animation.reverse());
  });

  /**
   * Gsap animations
   */
  const items = document.querySelectorAll(".slider__item");
  const width = (items.length - 1) * 100;
  const section = document.querySelector(".projects");

  gsap.to(".slider__item", {
    xPercent: -width,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + section.offsetWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  items.forEach((item) => {
    gsap.to(item.querySelector(".slider__img"), {
      xPercent: 50,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + section.offsetWidth,
        scrub: true,
      },
    });
  });

  // HERE STARTS SCROLL paralax animation for projects elements

  const projectSection = document.querySelector(".pin-spacer");

  gsap.to(projectContainer, {
    duration: 3.25,
    yPercent: -100,
    // opacity: 0,
    ease: "powe3.out",
    scrollTrigger: {
      trigger: projectSection,
      start: "80% 20%",
      end: "bottom top",
      // end: () => "+=" + projectSection.offsetHeight,
      scrub: true,
      // markers: true,
    },
  });
};

export const smoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
};
