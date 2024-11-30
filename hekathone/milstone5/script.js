var Form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeDeta = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeDeta));
    var resumeHtml = "\n    <h2><b> Editable resume</b></h2>\n    <h3>personal information</h3>\n    <p><b>name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    \n    <h3>education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h3>experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <h3>skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    resumeDisplayElement.innerHTML = resumeHtml;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParms = new URLSearchParams(window.location.search);
    var username = urlParms.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeDeta = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeDeta.name;
            document.getElementById('email').value = resumeDeta.email;
            document.getElementById('phone').value = resumeDeta.phone;
            document.getElementById('education').value = resumeDeta.education;
            document.getElementById('experience').value = resumeDeta.experience;
            document.getElementById('skills').value = resumeDeta.skills;
        }
    }
});
