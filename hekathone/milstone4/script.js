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
    var resumeHtml = "\n    <h2><b> Editable resume</b></h2>\n    <h3>personal information</h3>\n    <p><b>name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    \n    <h3>education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h3>experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <h3>skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("Error");
    }
});
