// Load in aboutMe section.
fetch('./static/html/aboutme.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('aboutMe').innerHTML = data;
    });

// Load in education.
fetch('./static/html/education.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('education').innerHTML = data;
    });

// Load in technical skills.
fetch('./static/html/technicalskills.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('technicalSkills').innerHTML = data;
    });

// Load in experience.
fetch('./static/html/experience.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('experience').innerHTML = data;
    });

// Load in projects.
fetch('./static/html/projects.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('projects').innerHTML = data;
    });

// Load in resources.
fetch('./static/html/resources.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('resources').innerHTML = data;
    });

// Load in other.
fetch('./static/html/other.html')
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