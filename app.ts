// Ensure that these elements are properly selected
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPDFButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values
    const FirstName = (document.getElementById('FirstName') as HTMLInputElement).value;
    const LastName = (document.getElementById('LastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const passingyear = (document.getElementById('passingyear') as HTMLInputElement).value;
    const companyname = (document.getElementById('companyname') as HTMLInputElement).value;
    const jobtitle = (document.getElementById('jobtitle') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const technicalskills = (document.getElementById('technicalskills') as HTMLInputElement).value;
    const softskills = (document.getElementById('softskills') as HTMLInputElement).value;

    // Collect resume data
    const resumeData = {
        FirstName, LastName, email, phone, degree, institution, passingyear,
        companyname, jobtitle, duration, technicalskills, softskills
    };

    // Encode the resume data
    const encodedData = encodeURIComponent(JSON.stringify(resumeData));

    // Generate a shareable URL with the encoded resume data
    const shareableURL = `${window.location.origin}/resumeViewer.html?data=${encodedData}`;

    // Save form data in local storage with the first name as the key
    localStorage.setItem(FirstName, JSON.stringify(resumeData));

    // Generate the resume dynamically
    const resumeHTML = `
    <h1>${FirstName} ${LastName}'s Resume</h1>
    <h2>Personal Information</h2>
    <p><strong>First Name:</strong> ${FirstName}</p>
    <p><strong>Last Name:</strong> ${LastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h2>Academic Qualification</h2>
    <p><strong>Degree:</strong> ${degree}</p>
    <p><strong>Institution:</strong> ${institution}</p>
    <p><strong>Passing Year:</strong> ${passingyear}</p>
    <h2>Work Experience</h2>
    <p><strong>Company Name:</strong> ${companyname}</p>
    <p><strong>Job Title:</strong> ${jobtitle}</p>
    <p><strong>Duration:</strong> ${duration}</p>
    <h2>Skills</h2>
    <p><strong>Technical Skills:</strong> ${technicalskills}</p>
    <p><strong>Soft Skills:</strong> ${softskills}</p>
    `;

    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;

    // Create a WhatsApp share link
    const whatsappMessage = `Check out ${FirstName} ${LastName}'s resume: ${shareableURL}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    // Display the shareable WhatsApp link
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = whatsappURL;
    shareableLinkElement.textContent = "Share via WhatsApp";
});

// Handle PDF download
downloadPDFButton.addEventListener("click", () => {
    window.print();
});
