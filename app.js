// Ensure that these elements are properly selected
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeOutput');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPDFButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var FirstName = document.getElementById('FirstName').value;
    var LastName = document.getElementById('LastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var passingyear = document.getElementById('passingyear').value;
    var companyname = document.getElementById('companyname').value;
    var jobtitle = document.getElementById('jobtitle').value;
    var duration = document.getElementById('duration').value;
    var technicalskills = document.getElementById('technicalskills').value;
    var softskills = document.getElementById('softskills').value;
    // Collect resume data
    var resumeData = {
        FirstName: FirstName,
        LastName: LastName,
        email: email,
        phone: phone,
        degree: degree,
        institution: institution,
        passingyear: passingyear,
        companyname: companyname,
        jobtitle: jobtitle,
        duration: duration,
        technicalskills: technicalskills,
        softskills: softskills
    };
    // Encode the resume data
    var encodedData = encodeURIComponent(JSON.stringify(resumeData));
    // Generate a shareable URL with the encoded resume data
    var shareableURL = "".concat(window.location.origin, "/resumeViewer.html?data=").concat(encodedData);
    // Save form data in local storage with the first name as the key
    localStorage.setItem(FirstName, JSON.stringify(resumeData));
    // Generate the resume dynamically
    var resumeHTML = "\n    <h1>".concat(FirstName, " ").concat(LastName, "'s Resume</h1>\n    <h2>Personal Information</h2>\n    <p><strong>First Name:</strong> ").concat(FirstName, "</p>\n    <p><strong>Last Name:</strong> ").concat(LastName, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h2>Academic Qualification</h2>\n    <p><strong>Degree:</strong> ").concat(degree, "</p>\n    <p><strong>Institution:</strong> ").concat(institution, "</p>\n    <p><strong>Passing Year:</strong> ").concat(passingyear, "</p>\n    <h2>Work Experience</h2>\n    <p><strong>Company Name:</strong> ").concat(companyname, "</p>\n    <p><strong>Job Title:</strong> ").concat(jobtitle, "</p>\n    <p><strong>Duration:</strong> ").concat(duration, "</p>\n    <h2>Skills</h2>\n    <p><strong>Technical Skills:</strong> ").concat(technicalskills, "</p>\n    <p><strong>Soft Skills:</strong> ").concat(softskills, "</p>\n    ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Create a WhatsApp share link
    var whatsappMessage = "Check out ".concat(FirstName, " ").concat(LastName, "'s resume: ").concat(shareableURL);
    var whatsappURL = "https://wa.me/?text=".concat(encodeURIComponent(whatsappMessage));
    // Display the shareable WhatsApp link
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = whatsappURL;
    shareableLinkElement.textContent = "Share via WhatsApp";
});
// Handle PDF download
downloadPDFButton.addEventListener("click", function () {
    window.print();
});
