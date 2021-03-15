const projects = [
  {
    number: 1,
    name: "expanding-cards",
    imgLink: "1-expanding-cards.jpg",
  },
  {
    number: 2,
    name: "progress-steps",
    imgLink: "2-progress-step.jpg",
  },
  {
    number: 3,
    name: "rotating-navigation",
    imgLink: "3-rotating-navigation.jpg",
  },
  {
    number: 4,
    name: "hidden-search-widget",
    imgLink: "4-hidden-search-widget.jpg",
  },
  {
    number: 5,
    name: "blurry-loading",
    imgLink: "5-blurry-loading.jpg",
  },
  {
    number: 6,
    name: "scroll-animation",
    imgLink: "6-scroll-animation.jpg",
  },
  {
    number: 7,
    name: "split-landing-page",
    imgLink: "7-split-landing-page.jpg",
  },
  {
    number: 8,
    name: "form-wave",
    imgLink: "8-form-wave.jpg",
  },
  {
    number: 9,
    name: "sound-board",
    imgLink: "9-sound-board.jpg",
  },
  {
    number: 10,
    name: "dad-jokes",
    imgLink: "10-dad-jokes.jpg",
  },
  {
    number: 11,
    name: "event-keycodes",
    imgLink: "11-event-keycodes.jpg",
  },
  {
    number: 12,
    name: "faq-collapse",
    imgLink: "12-faq-collapse.jpg",
  },
  {
    number: 13,
    name: "random-choice-picker",
    imgLink: "13-random-choice-picker.jpg",
  },
  {
    number: 14,
    name: "animated-navigation",
    imgLink: "14-animated-navigation.jpg",
  },
  {
    number: 15,
    name: "incrementing-counter",
    imgLink: "15-incrementing-counter.jpg",
  },
  {
    number: 16,
    name: "drink-water",
    imgLink: "16-drink-water.jpg",
  },
  {
    number: 17,
    name: "movie-app",
    imgLink: "17-movie-app.jpg",
  },
  {
    number: 18,
    name: "background-slider",
    imgLink: "18-background-slider.jpg",
  },
  {
    number: 19,
    name: "theme-clock",
    imgLink: "19-theme-clock.jpg",
  },
  {
    number: 20,
    name: "button-ripple-effect",
    imgLink: "20-button-ripple-effect.jpg",
  },
  {
    number: 21,
    name: "drag-n-drop",
    imgLink: "21-drag-n-drop.jpg",
  },
  {
    number: 22,
    name: "drawing-app",
    imgLink: "22-drawing-app.jpg",
  },
  {
    number: 23,
    name: "kinetic-loader",
    imgLink: "23-kinetic-loader.jpg",
  },
  {
    number: 24,
    name: "content-placeholder",
    imgLink: "24-content-placeholder.jpg",
  },
  {
    number: 25,
    name: "sticky-navbar",
    imgLink: "25-sticky-navbar.jpg",
  },
  {
    number: 26,
    name: "double-vertical-slider",
    imgLink: "26-double-vertical-slider.jpg",
  },
  {
    number: 27,
    name: "toast-notification",
    imgLink: "27-toast-notification.jpg",
  },
  {
    number: 28,
    name: "github-profiles",
    imgLink: "28-github-profiles.jpg",
  },
  {
    number: 29,
    name: "double-click-heart",
    imgLink: "29-double-click-heart.jpg",
  },
  {
    number: 30,
    name: "auto-text-effect",
    imgLink: "30-auto-text-effect.jpg",
  },
  {
    number: 31,
    name: "password-generator",
    imgLink: "31-password-generator.jpg",
  },
  {
    number: 32,
    name: "good-cheap-fast",
    imgLink: "32-good-cheap-fast.jpg",
  },
  {
    number: 33,
    name: "notes-app",
    imgLink: "33-notes-app.jpg",
  },
  {
    number: 34,
    name: "animated-countdown",
    imgLink: "34-animated-countdown.jpg",
  },
  {
    number: 35,
    name: "image-carousel",
    imgLink: "35-image-carousel.jpg",
  },
  {
    number: 36,
    name: "hoverboard",
    imgLink: "36-hoverboard.jpg",
  },
  {
    number: 37,
    name: "pokedex",
    imgLink: "37-pokedex.jpg",
  },
  {
    number: 38,
    name: "mobile-tab-navigation",
    imgLink: "38-mobile-tab-navigation.jpg",
  },
  {
    number: 39,
    name: "password-strength-background",
    imgLink: "39-password-strength-background.jpg",
  },
  {
    number: 40,
    name: "3d-background-boxes",
    imgLink: "40-3d-background-boxes.jpg",
  },
  {
    number: 41,
    name: "verify-account-ui",
    imgLink: "41-verify-account-ui.jpg",
  },
  {
    number: 42,
    name: "live-user-filter",
    imgLink: "42-live-user-filter.jpg",
  },
  {
    number: 43,
    name: "feedback-ui-design",
    imgLink: "43-feedback-ui-design.jpg",
  },
  {
    number: 44,
    name: "custom-range-slider",
    imgLink: "44-custom-range-slider.jpg",
  },
  {
    number: 45,
    name: "netflix-mobile-navigation",
    imgLink: "45-netflix-mobile-navigation.jpg",
  },
  {
    number: 46,
    name: "quiz-app",
    imgLink: "46-quiz-app.jpg",
  },
  {
    number: 47,
    name: "testimonial-box-switcher",
    imgLink: "47-testimonial-box-switcher.jpg",
  },
  {
    number: 48,
    name: "random-image-feed",
    imgLink: "48-random-image-feed.jpg",
  },
  {
    number: 49,
    name: "todo-list",
    imgLink: "49-todo-list.jpg",
  },
  {
    number: 50,
    name: "insect-catch-game",
    imgLink: "50-insect-catch-game.jpg",
  },
];

const projectsEL = document.getElementById("projects");
const testing = projects.forEach((el) => {
  let projectEl = document.createElement("div");
  projectEl.classList.add("wrapper");
  projectEl.setAttribute("data-tilt", "");
  projectEl.setAttribute("data-tilt-perspective", "500");
  projectEl.innerHTML = `<a href='/projects/${
    el.name
  }' target='_blank' class='link'>
            <img src='/img/${el.imgLink}'/>
            <span class='num'>${
              el.number <= 9 ? "0" + el.number : el.number
            }</span>
            <span class='name'>${el.name.replace(/-/g, " ")}</span>
          </a>`;
  projectsEL.appendChild(projectEl);
});
