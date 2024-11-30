var Form = document.getElementById("resume-form") as HTMLFormElement;
var resumeDisplayElement=document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container")as HTMLDivElement;
const shareableLinkElement= document.getElementById("shareable-link")as HTMLAnchorElement;
const downloadPdfButton= document.getElementById("download-pdf")as HTMLButtonElement;


Form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();
    const username=(document.getElementById("username")as HTMLInputElement).value;
    const name=(document.getElementById("name")as HTMLInputElement) .value
    const email=(document.getElementById("email")as HTMLInputElement) .value
    const phone=(document.getElementById("phone")as HTMLInputElement) .value
    const education=(document.getElementById("education")as HTMLTextAreaElement) .value
    const experience=(document.getElementById("experience")as HTMLTextAreaElement) .value
    const skills=(document.getElementById("skills")as HTMLTextAreaElement) .value ;
    const resumeDeta={
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username,JSON.stringify(resumeDeta));
    
  
    

    const resumeHtml=`
    <h2><b> Editable resume</b></h2>
    <h3>personal information</h3>
    <p><b>name:</b><span contenteditable="true">${name}</span></p>
    <p><b>email:</b><span contenteditable="true">${email}</span></p>
    <p><b>phone:</b><span contenteditable="true">${phone}</span></p>
    
    
    <h3>education</h3>
    <p contenteditable="true">${education}</p>
    <h3>experience</h3>
    <p contenteditable="true">${experience}</p>
    <h3>skills</h3>
    <p contenteditable="true">${skills}</p>
    `;
    
        resumeDisplayElement.innerHTML= resumeHtml;

        const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;

    
});
downloadPdfButton.addEventListener('click',()=>{
    window.print();
});

window.addEventListener('DOMContentLoaded',()=>{
    const urlParms = new URLSearchParams(window.location.search);
    const username = urlParms.get('username');
    

    if(username){
        const savedResumeData = localStorage.getItem(username);
        if(savedResumeData){
            const resumeDeta = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeDeta.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeDeta.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeDeta.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeDeta.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeDeta.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeDeta.skills;

        }
    }
});