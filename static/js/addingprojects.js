const projectsShowcaseSection = document.getElementById('projectsShowcase');;

function addProject(projectImagePath, projectName, projectDescription, projectTechStack, projectLink) {
    const contentToMake = `
    <!-- CONTAINER OF A PROJECT -->
    <div class="flex flex-col navbar-theme-color border-2 border-white rounded-lg shadow-lg">
        <!-- Image of project. -->
        <div>
            <img src="${projectImagePath}" alt="${projectName}" class="h-44 w-full object-scale-down rounded-md shadow-md">
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
                    <a href="${projectLink}" target="_blank" class="see-project-button z-1">
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

addProject('/static/imgs/projectthumbnail.png', 'Personal Portfolio Website', 'A personal portfolio website to showcase my projects, skills, and experience.', 'HTML, CSS, TailwindCSS, JavaScript', 'https://github.com/ryanm055/ryanm055.github.io');
addProject('https://raw.githubusercontent.com/ryanm055/LogFileMaker/main/image.png', 'Log File Maker', 'A desktop app tool made for the YU Blueprint BlackCreek DBMS project to generate log files for testing many features.', 'Python, PySide6, Qt, Qt Designer', 'https://github.com/ryanm055/LogFileMaker');
addProject('/static/imgs/yublueprint.jpg', 'YU Blueprint BlackCreek DBMS', 'Django & Spring Boot based database management system with PostgreSQL, Redis.', 'HTML, CSS, TailwindCSS, Javascript, Python, Django, Springboot, PostgreSQL, Redis, Docker', 'https://github.com/yublueprint/BlackCreekFarm');
// addProject('/static/imgs/project4.png', 'Chat Application', 'A real-time chat application that allows users to communicate with each other in different chat rooms.', 'Socket.io, Node.js, Express, HTML, CSS', '');
// addProject('/static/imgs/project5.png', 'Weather Forecast App', 'A web application that provides users with real-time weather forecasts based on their location.', 'Vue.js, OpenWeatherMap API, HTML, CSS', '');
// addProject('/static/imgs/project6.png', 'Blog Platform', 'A blogging platform that allows users to create, edit, and publish blog posts with rich text formatting.', 'Ruby on Rails, SQLite, HTML, CSS', '');
// addProject('/static/imgs/project7.png', 'Fitness Tracker', 'A fitness tracking application that helps users monitor their workouts, set goals, and track progress over time.', 'Flutter, Dart, Firebase', '');
// addProject('/static/imgs/project8.png', 'Recipe Sharing Website', 'A community-driven recipe sharing website where users can upload, share, and discover new recipes.', 'PHP, MySQL, HTML, CSS', '');
// addProject('/static/imgs/project9.png', 'Online Learning Platform', 'An online learning platform that offers courses on various topics with video lectures, quizzes, and assignments.', 'ASP.NET, C#, SQL Server, HTML, CSS', '');
// addProject('/static/imgs/project10.png', 'Travel Itinerary Planner', 'A travel itinerary planner that helps users organize their trips, including flights, accommodations, and activities.', 'Angular, Node.js, Express, MongoDB', '');
// ^ Example projects; replace with actual projects as needed.