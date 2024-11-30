var Form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHtml = "\n    <h2><b>resume</b></h2>\n    <h3>personal information</h3>\n    <p><b>name:</b>".concat(name, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n    <p><b>phone:</b>").concat(phone, "</p>\n    \n    \n    <h3>education</h3>\n    <p>").concat(education, "</p>\n    <h3>experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("Error");
    }
});
