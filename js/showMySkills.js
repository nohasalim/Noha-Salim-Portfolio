const skillsContainer = document.querySelector(".skills");

const mySkills = [
  { skill_name: "HTML", experience: "2 Years Experience" },
  { skill_name: "CSS", experience: "2 Years Experience" },
  { skill_name: "JavaScript", experience: "2 Years Experience" },
  { skill_name: "React", experience: "1 Year Experience" },
  { skill_name: "Sass", experience: "1 Year Experience" },
  { skill_name: "Accessibility", experience: "1 Year Experience" },
];
 function ShowMySkills() {
  skillsContainer.innerHTML = "";
  mySkills.forEach((myskill) => {
    skillsContainer.innerHTML += `
            <div id="skill">
                <h3>${myskill.skill_name}</h3>
                <p>${myskill.experience}</p>
            </div>`;
  });
}
ShowMySkills();

