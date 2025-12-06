const projectsShowcaseSection = document.getElementById('projectsShowcase');;

function addProject(projectImagePath, projectName, projectDescription, projectTechStack, projectLink) {
    const contentToMake = `
    <!-- CONTAINER OF A PROJECT -->
    <div class="flex flex-col navbar-theme-color border-2 border-white rounded-lg shadow-lg">
        <!-- Image of project. -->
        <div>
            <img src="${projectImagePath}" alt="${projectName}" class="size-full object-cover rounded-md shadow-md">
        </div>

        <!-- Text and other contents -->
        <div class="p-5 space-y-3">
            <!-- Title of project. -->
            <div>
                <h2 class="text-xl font-semibold">
                    ${projectName}
                </h2>
            </div>
        
            <!-- Description of project. -->
            <div>
                <p class="text-sm">
                    ${projectDescription}
                </p>
            </div>
        
            <!-- Techstack. -->
            <div class="mb-10">
                <p class="italic">
                    Tech Stack: ${projectTechStack}
                </p>
            </div>
        
            <!-- Link to project. -->
            <div class="flex items-center justify-center">
                <div class="w-1/2">
                    <a href="${projectLink}" target="_blank" class="see-project-button">
                        <i class="fa-brands fa-github fa-xl"></i>
                        See Project
                        <svg class="project-arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clip-rule="evenodd"
                        ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>`;

    projectsShowcaseSection.innerHTML += contentToMake;
}

addProject('/static/imgs/project1.png', 'Personal Portfolio Website', 'A personal portfolio website to showcase my projects, skills, and experience.', 'HTML, CSS, JavaScript', 'https://github.com/ryanm055/ryanm055.github.io');