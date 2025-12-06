const educationSection = document.getElementById('education');
const experienceSection = document.getElementById('experience');

educationSection.innerHTML += `
<!-- HEADING -->
<div>
    <h1 class="text-2xl font-bold">
        EDUCATION
    </h1>
</div>`;

experienceSection.innerHTML += `
<!-- HEADING -->
<div>
    <h1 class="text-2xl font-bold">
        EXPERIENCE
    </h1>
</div>`;

function addContent(sectionGiven, iconPath, institutionName, bachelorType, occupationName, startYear, endYear, dateNote) {
    const contentToMake = `
    <!-- Role 1 -->
    <div class="w-full flex flex-row space-x-4 justify-between">
        <!-- Left Side -->
        <div class="flex flex-row space-x-4">
            <!-- Icon -->
            <div class="py-3">
                <img src="${iconPath}" alt="${institutionName}" class="rounded-xl" width="30" height="30">
            </div>
            <!-- School Name +  Program Name -->
            <div class="flex flex-col">
                <h4 class="font-bold text-lg">${institutionName}</h4>
                <p class="text-md">${bachelorType} ${occupationName}</p>
            </div>
        </div>

        <!-- Right Side -->
        <div>
            <!-- Date  -->
            <div class="flex flex-col">
                <h4 class="font-bold text-lg">${startYear} - ${endYear}</h4>
                <p class="text-xs mx-auto italic">${dateNote}</p>
            </div>
        </div>
    </div>
    `;

    sectionGiven.innerHTML += contentToMake;
}

// Adding education.
addContent(educationSection,'/static/imgs/yorku.png', 'York University', 'BASc', 'Computer Science for Software Development', '2024', '2028', '(Expected)');

// Adding experience.
addContent(experienceSection,'/static/imgs/yublueprint.jpg', 'YU Blueprint', '', 'Software Developer', 'April 2025', 'Present', '');