const projects = [
  {
    number: 1,
    name: "expanding-cards",
    imgLink: "1-expanding-cards.png",
  },
  {
    number: 2,
    name: "progress-steps",
    imgLink: "2-progress-step.png",
  },
  {
    number: 3,
    name: "rotating-navigation",
    imgLink: "3-rotating-navigation.png",
  },
  {
    number: 4,
    name: "hidden-search-widget",
    imgLink: "4-hidden-search-widget.png",
  },
  {
    number: 5,
    name: "blurry-loading",
    imgLink: "5-blurry-loading.png",
  },
  {
    number: 6,
    name: "scroll-animation",
    imgLink: "6-scroll-animation.png",
  },
  {
    number: 7,
    name: "split-landing-page",
    imgLink: "7-split-landing-page.png",
  },
  {
    number: 8,
    name: "form-wave",
    imgLink: "8-form-wave.png",
  },
  {
    number: 9,
    name: "sound-board",
    imgLink: "9-sound-board.png",
  },
  {
    number: 10,
    name: "dad-jokes",
    imgLink: "10-dad-jokes.png",
  },
  {
    number: 11,
    name: "event-keycodes",
    imgLink: "11-event-keycodes.png",
  },
  {
    number: 12,
    name: "faq-collapse",
    imgLink: "12-faq-collapse.png",
  },
  {
    number: 13,
    name: "random-choice-picker",
    imgLink: "13-random-choice-picker.png",
  },
  {
    number: 14,
    name: "animated-navigation",
    imgLink: "14-animated-navigation.png",
  },
  {
    number: 15,
    name: "incrementing-counter",
    imgLink: "15-incrementing-counter.png",
  },
  {
    number: 16,
    name: "drink-water",
    imgLink: "16-drink-water.png",
  },
  {
    number: 17,
    name: "movie-app",
    imgLink: "17-movie-app.png",
  },
  {
    number: 18,
    name: "background-slider",
    imgLink: "18-background-slider.png",
  },
  {
    number: 19,
    name: "theme-clock",
    imgLink: "19-theme-clock.png",
  },
  {
    number: 20,
    name: "button-ripple-effect",
    imgLink: "20-button-ripple-effect.png",
  },
  {
    number: 21,
    name: "drag-n-drop",
    imgLink: "21-drag-n-drop.png",
  },
  {
    number: 22,
    name: "drawing-app",
    imgLink: "22-drawing-app.png",
  },
  {
    number: 23,
    name: "kinetic-loader",
    imgLink: "23-kinetic-loader.png",
  },
  {
    number: 24,
    name: "content-placeholder",
    imgLink: "24-content-placeholder.png",
  },
  {
    number: 25,
    name: "sticky-navbar",
    imgLink: "25-sticky-navbar.png",
  },
  {
    number: 26,
    name: "double-vertical-slider",
    imgLink: "26-double-vertical-slider.png",
  },
  {
    number: 27,
    name: "toast-notification",
    imgLink: "27-toast-notification.png",
  },
  {
    number: 28,
    name: "github-profiles",
    imgLink: "28-github-profiles.png",
  },
  {
    number: 29,
    name: "double-click-heart",
    imgLink: "29-double-click-heart.png",
  },
  {
    number: 30,
    name: "auto-text-effect",
    imgLink: "30-auto-text-effect.png",
  },
];

const projectsEL = document.getElementById("projects");
const testing = projects.forEach((el) => {
  let projectEl = document.createElement("div");
  projectEl.classList.add("wrapper");
  projectEl.innerHTML = `<a href='/projects/${el.name}' target='_blank'>
            <img src='/img/${el.imgLink}'/>
            <span>${el.number}</span>
            <span>${el.name}</span>
          </a>`;
  projectsEL.appendChild(projectEl);
});
