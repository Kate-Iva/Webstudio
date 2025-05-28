document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.header-menu-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        
        navLinks.forEach(l => l.classList.remove('current'));
        link.classList.add('current');
      });
    });
    
    window.addEventListener('scroll', () => {
      let currentId = null;
      let minDistance = Infinity;
      
      document.querySelectorAll('[id]').forEach(elem => {
        const rect = elem.getBoundingClientRect();
       
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentId = elem.id;
          }
        }
      });
      if (currentId) {
       
        navLinks.forEach(link => {
          link.classList.remove('current');
          if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('current');
          }
        });
      }
    });
});


    //Mibile menu
    document.addEventListener('DOMContentLoaded', () => {
    const mobMenu = document.querySelector('.header-menu-mob');
    const openBtn = document.querySelector('.menu-open-btn'); 
    const closeBtn = document.querySelector('.mob-close-btn');
   
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        mobMenu.classList.add('is-open');
        mobMenu.classList.remove('is-close');
      });
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        mobMenu.classList.remove('is-open');
        mobMenu.classList.add('is-close');
      });
    }
   
    const mobLinks = document.querySelectorAll('.mob-menu-link');
    mobLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
        
        mobMenu.classList.remove('is-open');
        mobMenu.classList.add('is-close');
        
        document.querySelectorAll('.mob-menu-link').forEach(l => l.classList.remove('current'));
        link.classList.add('current');
      });
    });

  });