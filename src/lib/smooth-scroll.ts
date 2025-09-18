'use client';

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const startPosition = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset for header
  const distance = targetPosition - startPosition;
  const duration = 1000; // Adjust duration as needed (in ms)
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
    window.scrollTo(0, startPosition + distance * run);
    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    }
  };

  window.requestAnimationFrame(animation);
  window.history.pushState({}, '', `#${id}`);
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  scrollToSection(id);
};
