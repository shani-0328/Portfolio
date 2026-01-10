export function scrollToSection(sectionId: string) {
  const id = sectionId.replace('#', '');
  
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 64; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function handleHashNavigation() {
  if (typeof window === 'undefined') return;
  
  const hash = window.location.hash;
  if (hash) {

    setTimeout(() => {
      scrollToSection(hash);
    }, 100);
  }
}
