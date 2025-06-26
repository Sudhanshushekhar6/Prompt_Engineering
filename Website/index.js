
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const element = document.querySelector(this.getAttribute('href'));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.style.background = 'rgba(255, 255, 255, 0.8)';
      return;
    }
    
    if (currentScroll > lastScroll) {
    
      navbar.style.transform = 'translateY(-100%)';
    } else {
  
      navbar.style.transform = 'translateY(0)';
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScroll = currentScroll;
  });
  
 
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
 
  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
  });