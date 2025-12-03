// Load in aboutMe section.
fetch('./static/html/aboutme.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('aboutMe').innerHTML = data;
    });

// Load in technical skills.
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
