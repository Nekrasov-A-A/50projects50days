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
];

const projectsEL = document.getElementById("projects");
const testing = projects.map((el) => {
  return `<div class='wrapper'>
          <a href='/projects/${el.name}' target='_blank'>
            <img src='/img/${el.imgLink}'/>
            <span>${el.number}</span>
            <span>${el.name}</span>
          </a>
          </div>`;
});
console.log(testing);
projectsEL.innerHTML = [...testing];
