import '../css/style.css';
import './projects';
import './experience';
import { projects } from './projects';
import { experiences } from './experience';

const renderNav = () => {
  const navTemplate = () => `
    <nav>
      <div class="nav-container">
        <div class="menu-container">
          <img class="logo" src="images/logo.png" alt="logo" />
          <button class="hamburger">☰</button>
          <h3>Alain Furter</h3>
          <div class="nav-links">
            <a href="/home" class="nav-link">Homepage</a>
            <a href="/experience" class="nav-link">Experience</a>
            <a href="/projects" class="nav-link">Projects</a>
          </div>
        </div>
        <div class="tech-container">
          <img src="images/html-logo.png" alt="HTML logo" />
          <img src="images/css-logo.png" alt="CSS logo" />
          <img src="images/js-logo.png" alt="JS logo" />
        </div>
      </div>
      <div class="hamburger-list-container hidden">
        <a href="/home" class="nav-link">Homepage</a>
        <a href="/experience" class="nav-link">Experience</a>
        <a href="/projects" class="nav-link">Projects</a>
      </div>
    </nav>`;
  const bodyElement = document.querySelector('body');
  bodyElement.innerHTML += navTemplate();
};

const renderSocial = () => {
  const socialTemplate = () => `
    <div class="socials">
    <a href="https://www.twitter.com/FurterAlain">
        <img src="images/twitter-icon-white.png" alt="Twitter image" />
    </a>
    <a href="https://www.linkedin.com/in/alain-furter-18707315">
        <img src="images/linkedin-icon-white.png" alt="Linkedin image" />
    </a>
    <a href="https://github.com/alainfurter">
        <img src="images/github-icon-white.png" alt="Github image" />
    </a>
  </div>`;
  const bodyElement = document.querySelector('body');
  bodyElement.innerHTML += socialTemplate();
};

const renderMain = () => {
  const mainTemplate = () => `
    <main>
    </main>`;
  const bodyElement = document.querySelector('body');
  bodyElement.innerHTML += mainTemplate();
};

const renderFooter = () => {
  const footerTemplate = () => `
    <footer>
      <a href="mailto:alain.furter@gmail.com"
      >contact me on alain.furter@gmail.com</a>
    </footer>
  `;
  const bodyElement = document.querySelector('body');
  bodyElement.innerHTML += footerTemplate();
};

const renderHome = () => {
  console.log('renderHome');
  const homeTemplate = () => `
    <section class="main-section">
      <img class="headshot" src="images/avatar.jpg" alt="Headshot Alain"/>
      <div class="introduction">
          <h1>Hi, I'm Alain</h1>
          <p>I am an upcoming full stack developer currently doing the Rock The Code bootcamp.</p>
          <p>In 2024 I hope to be able to develop my own projects or being hired on a contract basis.</p>
          <p>Check out my projects and experiences.</p>
      </div>
    </section>`;
  const mainContainer = document.querySelector('main');
  mainContainer.innerHTML = homeTemplate();
};

const renderExperience = () => {
  console.log('renderExperience');
  const experiencesSectionTemplate = () => `
      <section class="experiences-section" id="experiences">
        <h2>Experiences</h2>
        <div class="experiences-cards-container">      
        </div>
      </section>
  `;
  const createExperienceTemplate = (image, company, jobTitle, jobDates, jobDescription, responsibilites) => `
    <div class="experience-card">
      <div class="company-info">
          <div class="image-container">
            <img src="images/${image}" alt="Company Image">
          </div>
          <h2>${company}</h2>
      </div>
      <h4>${jobTitle}</h4>
      <h5>${jobDates}</h5>
      <p>${jobDescription}</p>
      <p>${responsibilites}</p>
    </div>`;
  // eslint-disable-next-line no-unused-vars
  let experiencesHTML = '';
  experiences.forEach((element) => {
    // eslint-disable-next-line max-len
    experiencesHTML += createExperienceTemplate(element.image, element.company, element.jobTitle, element.dates, element.description, element.responsibilities);
  });
  const mainContainer = document.querySelector('main');
  mainContainer.innerHTML = experiencesSectionTemplate();
  const experiencesCardsContainer = document.querySelector('.experiences-cards-container');
  experiencesCardsContainer.innerHTML = experiencesHTML;
};

const renderProjects = () => {
  console.log('renderProjects');
  const projectsSectionTemplate = () => `
    <section class="projects-section" id="projects">
      <h2>Projects</h2>
      <div class="projects-cards-container">
      </div>
    </section>
  `;
  const createProjectTemplate = (number, image, techs, link, title, description) => `
      <div class="project-card project-color${number}">
        <div class="image-container">
          <img src="images/${image}" alt="Project Image">
        </div>
        <h6>${techs}</h6>
        <a href="${link}"><h3>${title}</h3></a>
        <p>${description}.</p>
     </div>`;
  // eslint-disable-next-line no-unused-vars
  let projectsHTML = '';
  projects.forEach((element, index) => {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    projectsHTML += createProjectTemplate(index, element.image, element.techs, element.link, element.title, element.description);
  });
  const mainContainer = document.querySelector('main');
  mainContainer.innerHTML = projectsSectionTemplate();
  const projectsCardsContainer = document.querySelector('.projects-cards-container');
  projectsCardsContainer.innerHTML = projectsHTML;
};

const addActionToLinks = () => {
  const linksArray = document.querySelectorAll('.nav-link');
  linksArray.forEach((element) => {
    element.addEventListener('click', (ev) => {
      ev.preventDefault(); // This causes the link to not load the URL it points to
      const linkHref = ev.target.href;
      const lastParam = linkHref.split('/').slice(-1)[0];
      //console.log('Link points to:', lastParam);
      switch (lastParam) {
        case 'home':
          renderHome();
          break;
        case 'experience':
          renderExperience();
          break;
        case 'projects':
          renderProjects();
          break;
        default:
          renderHome();
      }
    });
  });
};

renderNav();
renderSocial();
renderMain();
renderFooter();

renderHome();

const hamburgerButton = document.querySelector('.hamburger');
const hamburgerList = document.querySelector('.hamburger-list-container');

hamburgerButton.addEventListener('click', () => {
  hamburgerList.classList.toggle('hidden');
});

addActionToLinks();
