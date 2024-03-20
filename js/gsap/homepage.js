/* Home
============================================================================================= */
// refresh the ScrollTrigger when the window loads to reposition the settings as our site doesn't always start from the top
window.addEventListener("load", function () {
    ScrollTrigger.refresh();
});

// timeline defaults
const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
});

// timeline animations
tl.to("#homeImg h1", { opacity: 1, duration: 1 })
    .to("#homeBio #name", { y: 0.5 })
    .to("#homeBio p", { y: 0.5 });

gsap.registerPlugin(ScrollTrigger);

// trigger the "tl" animation when user reaches home page
ScrollTrigger.create({
    animation: tl,
    trigger: "#home",
    start: "40% 50%",
    end: "60% 50%",
    // markers: true,
    toggleActions: "play pause play pause",
});

/* Projects
============================================================================================= */
const projectsGrid = document.querySelector("#projectsGrid");

// For each project in the data, we'll create an element which can be clicked for a cool animation expand :D
projectsData.forEach((project) => {
    let div = document.createElement("div");
    div.classList.add("project");
    div.classList.add("intractable");
    div.setAttribute("data-type", "expand");

    let inner = `
        <div>${project.title}</div>
        <img src="${project.img}" />
    `;

    div.innerHTML = inner;

    projectsGrid.append(div);

    div.addEventListener("click", (e) => {
        // Gets the amount of the tags
        let tags = "";

        // Checks to see if there is any tags
        if (project && project.tags && project.tags.length !== 0) {
            project.tags.forEach((tag) => {
                tags += `<h4>${tag}</h4>`;
            });
        }

        // Change the information in the projectsPopup
        projectInfo.innerHTML = `
        <a href="${project.popup.link}" id="projectsImg" target="_blank">
            <img
                src="${project.img}"
                class="intractable"
                data-type="link"
            />
        </a>
        <div>
            <div id="projectTags">
                ${tags}
            </div>
            <h4 id="projectMates">${project.client}</h4>
        </div>
        <p id="projectDescription">
            ${project.popup.subDesc}
        </p>
        `;
        projectName.innerHTML = project.title;

        // Changing the size
        const targetRect = e.target.getBoundingClientRect();
        projectsPopup.style.width = `${targetRect.width}px`;
        projectsPopup.style.height = `${targetRect.height}px`;
        projectsPopup.style.top = `${targetRect.top}px`; // Position from the top of the viewport
        projectsPopup.style.left = `${targetRect.left}px`; // Position from the left of the viewport

        // after a bit, expand the screen
        setTimeout(() => {
            projectsPopup.style.width = `100%`;
            projectsPopup.style.height = `100%`;
            projectsPopup.style.top = 0;
            projectsPopup.style.left = 0;
            projectsPopup.style.borderRadius = 0;
            projectsPopup.style.padding = "1rem";
        }, 500); // delays .5 sec
    });
});

/* Projects Popup
============================================================================================= */
const projectsPopup = document.querySelector("#projectsPopup");
const projectsPopupClose = projectsPopup.querySelector("#projectsPopupClose");
const projectName = projectsPopup.querySelector("#projectName");
const projectInfo = projectsPopup.querySelector("#projectInfo");

projectsPopupClose.addEventListener("click", () => {
    projectsPopup.style.width = 0;
    projectsPopup.style.height = 0;
    projectsPopup.style.top = "50%";
    projectsPopup.style.left = "50%";
    projectsPopup.style.borderRadius = `100%`;
    projectsPopup.style.padding = 0;
});
