window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
  
    // Adjust background scroll speed (scroll the image up as you scroll)
    const heroBackground = document.querySelector('.hero::before');
    document.querySelector('.hero').style.setProperty('--scroll-position', `${scrollPosition * 0.4}px`); // Scroll image slower
  
    // Adjust text scroll speed (text moves slower than the background)
    const heroText = document.querySelector('.hero-content');
    heroText.style.transform = `translateY(${scrollPosition * 0.3}px)`; // Slow down the text
  });
  