document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // CUSTOM CURSOR (Lando Norris Style)
  // ========================================
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  const cursorTrail = document.querySelector('.cursor-trail');
  const mouseGlow = document.querySelector('.mouse-glow');

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  let trailX = 0, trailY = 0;
  let glowX = 0, glowY = 0;

  // Mouse move handler
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor with smooth follow
  function animateCursor() {
    // Dot follows mouse exactly
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }

    // Outline follows with delay
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    if (cursorOutline) {
      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';
    }

    // Trail follows with more delay
    trailX += (mouseX - trailX) * 0.08;
    trailY += (mouseY - trailY) * 0.08;
    if (cursorTrail) {
      cursorTrail.style.left = trailX + 'px';
      cursorTrail.style.top = trailY + 'px';
    }

    // Glow follows with even more delay
    glowX += (mouseX - glowX) * 0.05;
    glowY += (mouseY - glowY) * 0.05;
    if (mouseGlow) {
      mouseGlow.style.left = glowX + 'px';
      mouseGlow.style.top = glowY + 'px';
    }

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Cursor hover effects
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .hamburger, [data-magnetic]');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursorDot) cursorDot.classList.add('hovering');
      if (cursorOutline) cursorOutline.classList.add('hovering');
    });
    
    el.addEventListener('mouseleave', () => {
      if (cursorDot) cursorDot.classList.remove('hovering');
      if (cursorOutline) cursorOutline.classList.remove('hovering');
    });
  });

  // ========================================
  // MAGNETIC EFFECT (Lando Norris Style)
  // ========================================
  const magneticElements = document.querySelectorAll('[data-magnetic]');
  
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  // ========================================
  // PARTICLES EFFECT
  // ========================================
  const particlesContainer = document.getElementById('particles');
  
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (15 + Math.random() * 20) + 's';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      particlesContainer.appendChild(particle);
    }
  }

  // ========================================
  // TYPING ANIMATION
  // ========================================
  const typingText = document.querySelector('.typing-text');
  const textToType = 'DEVELOPER | CREATOR | GAMER';
  let charIndex = 0;

  function type() {
    if (typingText && charIndex < textToType.length) {
      typingText.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(type, 80);
    }
  }

  setTimeout(type, 1800);

  // ========================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for cards
        setTimeout(() => {
          entry.target.classList.add('visible');
          
          // Handle section title reveal
          if (entry.target.classList.contains('section-title')) {
            entry.target.classList.add('revealed');
          }
        }, index * 100);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('[data-animate], .project-card, .about-description').forEach(el => {
    scrollObserver.observe(el);
  });

  // ========================================
  // SKILL ITEMS STAGGERED ANIMATION
  // ========================================
  const skillItems = document.querySelectorAll('.skill-item');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        skillItems.forEach((item, i) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, i * 100);
        });
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });

  if (skillItems.length > 0) {
    skillItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'all 0.6s cubic-bezier(0.65, 0.05, 0, 1)';
    });
    skillObserver.observe(skillItems[0]);
  }

  // ========================================
  // PROJECT CARDS - CLICK HANDLERS
  // ========================================
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const customLink = this.getAttribute('data-link');
      const projectName = this.getAttribute('data-project');
      
      // If custom link is provided (e.g., Snake Game), use it
      if (customLink) {
        window.open(customLink, '_blank');
      } else {
        // Otherwise, link to GitHub repo
        window.open(`https://github.com/xdkurbie/${projectName}`, '_blank');
      }
    });

    // Add tilt effect on mouse move
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });

  // ========================================
  // HAMBURGER MENU ANIMATION
  // ========================================
  const hamburger = document.querySelector('.hamburger');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      const spans = this.querySelectorAll('span');
      
      if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[1].style.transform = 'scaleX(0)';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[1].style.transform = 'scaleX(1)';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
      }
    });
  }

  // ========================================
  // PARALLAX EFFECT FOR HERO
  // ========================================
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroTitle = document.querySelector('.hero-title');
        
        if (hero && scrolled < window.innerHeight) {
          // Parallax for hero content
          if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.5;
          }
          
          // Scale effect for title
          if (heroTitle) {
            const scale = 1 + scrolled * 0.0005;
            heroTitle.style.transform = `scale(${scale})`;
          }
        }
        
        ticking = false;
      });
      ticking = true;
    }
  });

  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================
  // NAVBAR SCROLL BEHAVIOR
  // ========================================
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.3s ease';
      } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
      }
    }
    
    lastScroll = currentScroll;
  });

  // ========================================
  // TEXT REVEAL ANIMATION FOR SECTION TITLES
  // ========================================
  const sectionTitles = document.querySelectorAll('.section-title');
  
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.5 });

  sectionTitles.forEach(title => titleObserver.observe(title));

  // ========================================
  // FOOTER ANIMATION
  // ========================================
  const footer = document.querySelector('.footer');
  
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  if (footer) {
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(30px)';
    footer.style.transition = 'all 0.8s cubic-bezier(0.65, 0.05, 0, 1)';
    footerObserver.observe(footer);
  }

  // ========================================
  // HERO TITLE 3D TILT ON MOUSE MOVE
  // ========================================
  const heroTitle = document.querySelector('.hero-title');
  const hero = document.querySelector('.hero');
  
  if (hero && heroTitle) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 50;
      const y = (e.clientY - rect.top - rect.height / 2) / 50;
      
      heroTitle.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    
    hero.addEventListener('mouseleave', () => {
      heroTitle.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    });
  }

  console.log('🚀 XDKURBIE Portfolio loaded with Lando Norris style animations!');
});
