// For navigation responsiveness.
const navMenuMobileContainer = document.getElementById('navMenuMobileContainer');
const navMenuMobileIcon = document.getElementById('navMenuMobileIcon');
const navMenuMobileLinks = document.getElementById('navMenuMobileLinks');

navMenuMobileContainer.addEventListener('click', () => {
    navMenuMobileIcon.classList.toggle('fa-bars');
    navMenuMobileIcon.classList.toggle('fa-x');
    navMenuMobileLinks.classList.toggle('hidden');
});

// Load in aboutMe section.
fetch('/static/html/aboutme.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('aboutMe').innerHTML = data;
    });

// Load in education.
// Education is added through another JS file.

// Load in technical skills.
fetch('/static/html/technicalskills.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('technicalSkills').innerHTML = data;
    });

// Load in experience.
// Experience is added through another JS file.

// Load in projects.
// Projects is added through another JS file.

// Load in resources.
fetch('/static/html/resources.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('resources').innerHTML = data;
    });

// Load in other.
fetch('/static/html/other.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('other').innerHTML = data;
    });

// Give in current year.
const year = new Date().getFullYear();
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = year;
}