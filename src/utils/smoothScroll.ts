// Enable smooth scrolling for all anchor links
export function initSmoothScrolling() {
  // Only run in browser
  if (typeof window === 'undefined') return;

  // Add smooth-scroll class to html if user hasn't disabled animations
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('smooth-scroll');
  }

  // Handle all anchor clicks
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (!target) return;
    
    const href = target.getAttribute('href');
    if (!href || href === '#') return;
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) return;
    
    e.preventDefault();
    
    // Calculate target position
    const headerHeight = document.querySelector('header')?.offsetHeight || 88;
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 16; // 16px extra spacing
    
    // Smooth scroll
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update URL without adding to history
    history.pushState(null, '', href);
  });
  
  // Handle back/forward navigation
  window.addEventListener('popstate', () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 88;
        const elementPosition = (target as HTMLElement).getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 16;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
}

// Initialize on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Handle initial hash in URL
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 88;
          const elementPosition = (target as HTMLElement).getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - 16;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure everything is loaded
    }
  });
}
