var Form = document.getElementById("resume-form") as HTMLFormElement;
var resumeDisplayElement=document.getElementById("resume-display") as HTMLDivElement;

Form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();
    const name=(document.getElementById("name")as HTMLInputElement) .value
    const email=(document.getElementById("email")as HTMLInputElement) .value
    const phone=(document.getElementById("phone")as HTMLInputElement) .value
    const education=(document.getElementById("education")as HTMLInputElement) .value
    const experience=(document.getElementById("experience")as HTMLInputElement) .value
    const skills=(document.getElementById("skills")as HTMLInputElement) .value
  
    

    const resumeHtml=`
    <h2><b>resume</b></h2>
    <h3>personal information</h3>
    <p><b>name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>
    
    
    <h3>education</h3>
    <p>${education}</p>
    <h3>experience</h3>
    <p>${experience}</p>
    <h3>skills</h3>
    <p>${skills}</p>
    `;
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML= resumeHtml;

        
    }else{
        console.error("Error")
    }
})