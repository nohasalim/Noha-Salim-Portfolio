const projectsContainer = document.querySelector(".projects");

// ✅ Initial projects data
const myProjects = [
  {
    image: "images/coaching-center.png",
    alt: "Coaching Center landing page",
    liveUrl: "https://landing-coaching-center-page2.vercel.app/",
    codeUrl: "https://github.com/nohasalim/Landing-Coaching-Center-Page2",
    title: "Coaching Center Page",
    technologies: ["HTML", "CSS"],
  },
  {
    image: "images/e-commerce-cart.png",
    alt: "E-commerce website",
    liveUrl: "https://e-commerce-site-by-engnohasalim.vercel.app/",
    codeUrl: "https://github.com/nohasalim/E-Commerce-Site",
    title: "E-commerce Site",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    image: "images/fatora-system.png",
    alt: "fatora system",
    liveUrl: "https://fatora-system.vercel.app/",
    codeUrl: "https://github.com/nohasalim/Fatora-System",
    title: "Fatora System",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "images/login-form.png",
    alt: "login form",
    liveUrl: "https://login-in-page.vercel.app/",
    codeUrl: "https://github.com/nohasalim/Login-In-Page",
    title: "Login Form",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "images/portfolio.png",
    alt: "portfolio",
    liveUrl: "https://landing-personal-page1.vercel.app/",
    codeUrl: "https://github.com/nohasalim/Landing-Personal-Page1",
    title: "Portfolio Template",
    technologies: ["HTML", "CSS"],
  },
  {
    image: "images/smart-home.png",
    alt: "smart home site",
    liveUrl: "https://smart-home-project-ruddy.vercel.app/",
    codeUrl: "https://github.com/nohasalim/Smart-Home-Project",
    title: "Smart Home Site",
    technologies: ["HTML", "CSS", "Animate.css", "WOW.js"],
  },
];

// ✅ Display projects
function showMyProjects() {
  projectsContainer.innerHTML = ""; // clear old content

  myProjects.forEach((myproject) => {
    projectsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <article class="project-card">
        <div class="image-container">
          <img src="${myproject.image}" alt="${myproject.alt}" loading="lazy" width="600" height="400"/>
          <div class="overlay-card" aria-hidden="true">
            <a href="${myproject.liveUrl}" target="_blank">View Project</a>
            <a href="${myproject.codeUrl}" target="_blank">View Code</a>
          </div>
        </div>
        <h3>${myproject.title}</h3>
        <p>${myproject.technologies.join("&emsp;")}</p>
      </article>
    `,
    );
  });
}

// ✅ Run when page loads
document.addEventListener("DOMContentLoaded", showMyProjects);
