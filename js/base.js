// Base JavaScript for Dental Clinic
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#siteNav");
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show");
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInside = navbarToggler.contains(event.target) || 
                           navbarCollapse.contains(event.target);
      
      if (!isClickInside && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  }
  
  // Close mobile menu when clicking nav links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });
  
  // Set active nav link based on current page
  const currentPage = window.location.pathname;
  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (currentPage === linkPath || 
        (currentPage === "/" && linkPath === "/index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  
  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Only handle internal page anchors
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
