const skillsContainer = document.querySelector(".skills");
const mySkills = [
  { name: "HTML", icon: "../images/html.png" },
  { name: "CSS", icon: "../images/css.png" },
  { name: "Bootstrap", icon: "../images/bootstrap.png" },
  { name: "JavaScript", icon: "../images/js.png" },
  { name: "React JS", icon: "../images/tailwindcss.png" },
  { name: "Tailwind CSS", icon: "../images/tailwindcss.png" },
  { name: "Accessibility", icon: "../images/accessiblity.png" },
];

function showMySkills() {
  skillsContainer.innerHTML = "";
  mySkills.forEach((myskill) => {
    skillsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="skill">
                <img src="${myskill.icon}" alt="${myskill.name} icon " loading="lazy">
                <h3>${myskill.name}</h3>
            </div>`
    );
  });
}
// ShowMySkills();
document.addEventListener("DOMContentLoaded", showMySkills);
