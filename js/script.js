console.log("Hello!");
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.header-menu-link');
   
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = link.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        navLinks.forEach(l => l.classList.remove('current'));
        link.classList.add('current');
      });
    });
    
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentSectionId = section.id;
        }
      });
      if (currentSectionId) {
        navLinks.forEach(link => {
          link.classList.remove('current');
          if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('current');
          }
        });
      }
    });
  });