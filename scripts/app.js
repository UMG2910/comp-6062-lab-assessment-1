const myFullName = "Umang Mistry"; 
const myStudentNumber = "1154031"; 

console.log(`${myFullName} - ${myStudentNumber}`);

const headerContent = document.querySelector('h1');
headerContent.innerHTML = `${myFullName} - ${myStudentNumber}`;
headerContent.classList.add('headingPrimary');
