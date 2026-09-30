// ==========================================================================
// Portfolio Interactivity: Theme Toggle, iOS Enhancements, Mobile Nav & Form
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Theme Toggle (Light / Dark Mode) & iOS Safari Status Bar Sync ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;
  const themeColorMeta = document.getElementById('theme-color-meta');

  const THEME_COLORS = {
    light: '#f8fafc',
    dark: '#0b0f19'
  };

  const applyTheme = (theme) => {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', THEME_COLORS[theme] || THEME_COLORS.light);
    }
  };

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (systemPrefersDark) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  // --- 2. Mobile Navigation Drawer & iOS Safe Scroll Lock ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMenu = () => {
    if (navMenu && mobileMenuBtn) {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      if (navOverlay) navOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  };

  const openMenu = () => {
    if (navMenu && mobileMenuBtn) {
      navMenu.classList.add('active');
      mobileMenuBtn.classList.add('active');
      if (navOverlay) navOverlay.classList.add('active');
      document.body.classList.add('menu-open');
    }
  };

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when tapping the backdrop overlay
    if (navOverlay) {
      navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when tapping any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on pressing Escape key (for external keyboard on iPad/iPhone)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // --- 3. Active Nav Link on Scroll (Intersection Observer) ---
  const sections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // --- 4. Interactive Contact Form Submission ---
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && formFeedback && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Simulate sending message (e.g. API call)
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;

        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = `Thank you, ${nameInput.value}! Your message has been sent successfully.`;

        // Clear input fields
        contactForm.reset();

        // Fade feedback message after 5 seconds
        setTimeout(() => {
          formFeedback.className = 'form-feedback';
          formFeedback.textContent = '';
        }, 5000);
      }, 700);
    });
  }
});
