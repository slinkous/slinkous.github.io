const navLinks = document.querySelectorAll('#navbar li');
const navLinkTargets = document.querySelectorAll('#navbar li a');
const sections = document.querySelectorAll('.contents section')

for(let i=0; i<sections.length; i++){
  sections[i].style.display ="none";
  document.querySelector('#about').style.display = "block";
}

for(let i=0; i<navLinks.length; i++){
  navLinks[i].addEventListener('click', (event) => {
      navLinks.forEach((link) =>{
        link.classList.remove('active')
      })
      navLinks[i].classList.add('active')
  })
}
for(let i=0; i<navLinkTargets.length; i++){
  navLinkTargets[i].addEventListener('click', (event)=>{
    sections.forEach((section)=>{section.style.display = "none"})
    let target = navLinkTargets[i].getAttribute('href');
    let targetSection = document.querySelector(target);
    targetSection.style.display = "block";
  })

}
