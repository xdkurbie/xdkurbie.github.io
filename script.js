/**
 * =========================================
 * XDKURBIE PORTFOLIO - MEGA ENHANCED JS
 * State-of-the-art interactions
 * =========================================
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('%c🚀 XDKURBIE Portfolio Loading...', 'color: #d2ff00; font-size: 16px; font-weight: bold;');

  // =========================================
  // PRELOADER
  // =========================================
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('progress-bar');
  const percentageText = document.getElementById('preloader-percentage');
  let progress = 0;

  function updatePreloader() {
    if (progress < 100) {
      progress += Math.random() * 10;
      progress = Math.min(progress, 100);
      progressBar.style.width = progress + '%';
      percentageText.textContent = Math.floor(progress) + '%';
      
      if (progress < 100) {
        requestAnimationFrame(() => setTimeout(updatePreloader, 50));
      } else {
        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.style.overflow = 'visible';
          initAnimations();
        }, 500);
      }
    }
  }

  // Start preloader
  document.body.style.overflow = 'hidden';
  updatePreloader();

  // =========================================
  // CUSTOM CURSOR
  // =========================================
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  const cursorTrail = document.querySelector('.cursor-trail');
  const mouseGlow = document.querySelector('.mouse-glow');

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  let trailX = 0, trailY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mousedown', () => {
    if (cursorDot) cursorDot.classList.add('clicking');
  });

  document.addEventListener('mouseup', () => {
    if (cursorDot) cursorDot.classList.remove('clicking');
  });

  function animateCursor() {
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }

    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;
    if (cursorOutline) {
      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';
    }

    trailX += (mouseX - trailX) * 0.06;
    trailY += (mouseY - trailY) * 0.06;
    if (cursorTrail) {
      cursorTrail.style.left = trailX + 'px';
      cursorTrail.style.top = trailY + 'px';
    }

    glowX += (mouseX - glowX) * 0.03;
    glowY += (mouseY - glowY) * 0.03;
    if (mouseGlow) {
      mouseGlow.style.left = glowX + 'px';
      mouseGlow.style.top = glowY + 'px';
    }

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Cursor hover effects
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .hamburger, [data-magnetic], [data-tilt], input, textarea');
  
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

  // =========================================
  // MAGNETIC EFFECT
  // =========================================
  const magneticElements = document.querySelectorAll('[data-magnetic]');
  
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  // =========================================
  // 3D TILT EFFECT
  // =========================================
  const tiltElements = document.querySelectorAll('[data-tilt]');
  
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });

  // =========================================
  // SCROLL PROGRESS BAR
  // =========================================
  const scrollProgress = document.getElementById('scroll-progress');
  
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    if (scrollProgress) {
      scrollProgress.style.width = progress + '%';
    }
  });

  // =========================================
  // NAVBAR SCROLL BEHAVIOR
  // =========================================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
      // Add scrolled class
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Hide/show on scroll
      if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    }
    
    lastScroll = currentScroll;
  });

  // =========================================
  // MOBILE MENU
  // =========================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    mobileLinks.forEach((link, index) => {
      link.style.transitionDelay = `${index * 0.1}s`;
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // =========================================
  // THEME TOGGLE
  // =========================================
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Play transition effect
      triggerPageTransition();
    });
  }

  // =========================================
  // AUDIO TOGGLE
  // =========================================
  const audioToggle = document.getElementById('audio-toggle');
  let audioEnabled = localStorage.getItem('audio') !== 'false';
  
  if (audioToggle) {
    if (!audioEnabled) audioToggle.classList.add('muted');
    
    audioToggle.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      audioToggle.classList.toggle('muted');
      localStorage.setItem('audio', audioEnabled);
    });
  }

  // =========================================
  // PAGE TRANSITION
  // =========================================
  function triggerPageTransition() {
    const transition = document.querySelector('.page-transition');
    if (transition) {
      transition.classList.add('active');
      setTimeout(() => {
        transition.classList.remove('active');
      }, 1000);
    }
  }

  // =========================================
  // TYPING ANIMATION
  // =========================================
  const typingElement = document.getElementById('typing-text');
  const phrases = ['DEVELOPER', 'CREATOR', 'GAMER', 'DESIGNER'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
    if (!typingElement) return;
    
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before new word
    }
    
    setTimeout(typeText, typingSpeed);
  }

  setTimeout(typeText, 2000);

  // =========================================
  // PARTICLES SYSTEM
  // =========================================
  const particlesContainer = document.getElementById('particles');
  
  if (particlesContainer) {
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (10 + Math.random() * 20) + 's';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      particlesContainer.appendChild(particle);
    }
  }

  // =========================================
  // 3D PARTICLE CANVAS
  // =========================================
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 100;
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.speedZ = Math.random() * 2 + 1;
      }
      
      update() {
        this.z -= this.speedZ;
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.z <= 0) {
          this.reset();
          this.z = 1000;
        }
      }
      
      draw() {
        const scale = 1000 / (1000 + this.z);
        const x = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = this.size * scale;
        const alpha = scale * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 255, 0, ${alpha})`;
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const scale1 = 1000 / (1000 + p1.z);
            const scale2 = 1000 / (1000 + p2.z);
            const x1 = (p1.x - canvas.width / 2) * scale1 + canvas.width / 2;
            const y1 = (p1.y - canvas.height / 2) * scale1 + canvas.height / 2;
            const x2 = (p2.x - canvas.width / 2) * scale2 + canvas.width / 2;
            const y2 = (p2.y - canvas.height / 2) * scale2 + canvas.height / 2;
            
            const alpha = (1 - distance / 150) * 0.1;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(210, 255, 0, ${alpha})`;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
  }

  // =========================================
  // SCROLL ANIMATIONS
  // =========================================
  function initAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 50);
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate], .project-card, .skill-card, .timeline-item').forEach(el => {
      scrollObserver.observe(el);
    });
  }

  // =========================================
  // COUNT UP ANIMATION
  // =========================================
  const countElements = document.querySelectorAll('[data-count]');
  
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-count'));
        let currentValue = 0;
        const increment = finalValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            target.textContent = finalValue;
            clearInterval(counter);
          } else {
            target.textContent = Math.floor(currentValue);
          }
        }, stepTime);
        
        countObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  countElements.forEach(el => countObserver.observe(el));

  // =========================================
  // SKILL LEVEL ANIMATION
  // =========================================
  const skillCards = document.querySelectorAll('.skill-card');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillCards.forEach(card => skillObserver.observe(card));

  // =========================================
  // PROJECT FILTER
  // =========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // =========================================
  // PROJECT CARD CLICK
  // =========================================
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't navigate if clicking on a link
      if (e.target.closest('a')) return;
      
      const customLink = this.getAttribute('data-link');
      const projectName = this.getAttribute('data-project');
      
      if (customLink) {
        window.open(customLink, '_blank');
      } else if (projectName) {
        window.open(`https://github.com/xdkurbie/${projectName}`, '_blank');
      }
    });
  });

  // =========================================
  // BACK TO TOP BUTTON
  // =========================================
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (backToTop) {
      if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });
  
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================
  // SMOOTH SCROLL FOR NAV LINKS
  // =========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // =========================================
  // KEYBOARD SHORTCUTS
  // =========================================
  const shortcutsModal = document.getElementById('shortcuts-modal');
  const closeShortcuts = document.getElementById('close-shortcuts');
  const easterEgg = document.getElementById('easter-egg');
  const closeEaster = document.getElementById('close-easter');
  
  // Konami Code
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    // Keyboard shortcuts
    if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      e.preventDefault();
      if (shortcutsModal) shortcutsModal.classList.toggle('active');
    }
    
    if (e.key === 'Escape') {
      if (shortcutsModal) shortcutsModal.classList.remove('active');
      if (easterEgg) easterEgg.classList.remove('active');
    }
    
    if (e.key.toLowerCase() === 't') {
      if (themeToggle) themeToggle.click();
    }
    
    if (e.key.toLowerCase() === 'm') {
      if (audioToggle) audioToggle.click();
    }
    
    if (e.key.toLowerCase() === 'g') {
      window.open('https://github.com/xdkurbie', '_blank');
    }
    
    if (e.key.toLowerCase() === 'h') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Konami Code
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        if (easterEgg) easterEgg.classList.add('active');
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
  if (closeShortcuts) {
    closeShortcuts.addEventListener('click', () => {
      if (shortcutsModal) shortcutsModal.classList.remove('active');
    });
  }
  
  if (closeEaster) {
    closeEaster.addEventListener('click', () => {
      if (easterEgg) easterEgg.classList.remove('active');
    });
  }

  // =========================================
  // FETCH GITHUB STATS
  // =========================================
  async function fetchGitHubStats() {
    try {
      const response = await fetch('https://api.github.com/users/xdkurbie');
      const data = await response.json();
      
      const reposCount = document.getElementById('repos-count');
      const followersCount = document.getElementById('followers-count');
      const followingCount = document.getElementById('following-count');
      
      if (reposCount) reposCount.textContent = data.public_repos || 0;
      if (followersCount) followersCount.textContent = data.followers || 0;
      if (followingCount) followingCount.textContent = data.following || 0;
    } catch (error) {
      console.log('Could not fetch GitHub stats:', error);
    }
  }
  
  fetchGitHubStats();

  // =========================================
  // PARALLAX EFFECT
  // =========================================
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && scrolled < window.innerHeight) {
          if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.2;
          }
          
          const orbs = document.querySelectorAll('.hero-gradient-orb');
          orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed}px)`;
          });
        }
        
        ticking = false;
      });
      ticking = true;
    }
  });

  // =========================================
  // LAZY LOAD IMAGES
  // =========================================
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));

  // =========================================
  // CONSOLE EASTER EGG
  // =========================================
  console.log('%c' + `
  ██╗  ██╗██████╗ ██╗  ██╗██╗   ██╗██████╗ ██████╗ ██╗███████╗
  ╚██╗██╔╝██╔══██╗██║ ██╔╝██║   ██║██╔══██╗██╔══██╗██║██╔════╝
   ╚███╔╝ ██║  ██║█████╔╝ ██║   ██║██████╔╝██████╔╝██║█████╗  
   ██╔██╗ ██║  ██║██╔═██╗ ██║   ██║██╔══██╗██╔══██╗██║██╔══╝  
  ██╔╝ ██╗██████╔╝██║  ██╗╚██████╔╝██║  ██║██████╔╝██║███████╗
  ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚══════╝
  `, 'color: #d2ff00; font-family: monospace;');
  
  console.log('%c👋 Hey there, curious developer!', 'color: #d2ff00; font-size: 16px;');
  console.log('%cFeel free to check out my code on GitHub: https://github.com/xdkurbie', 'color: #888; font-size: 12px;');
  console.log('%cTry pressing "?" to see keyboard shortcuts!', 'color: #888; font-size: 12px;');

  // =========================================
  // PERFORMANCE OPTIMIZATION
  // =========================================
  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Optimize resize handler
  window.addEventListener('resize', debounce(() => {
    // Handle resize
  }, 250));

  console.log('%c✅ XDKURBIE Portfolio Loaded Successfully!', 'color: #d2ff00; font-size: 14px; font-weight: bold;');
});

// Service Worker Registration (for PWA support)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Service worker can be added later for offline support
  });
}
