document.addEventListener('DOMContentLoaded', function() {
    const headerHtml = `
    <nav class="nav-fixed">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <a href="index.html" class="flex items-center space-x-2">
                    <img src="images/salvium-logo.png" alt="Salvium Logo" class="h-8">
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="text-white hover:text-[#40E0D0] transition-colors">Home</a>
                    <a href="about.html" class="text-white hover:text-[#40E0D0] transition-colors">About</a>
                    <a href="blogs.html" class="text-white hover:text-[#40E0D0] transition-colors">Blogs</a>
                    <a href="faq.html" class="text-white hover:text-[#40E0D0] transition-colors">FAQ</a>
                    <a href="exchanges.html" class="text-white hover:text-[#40E0D0] transition-colors">Exchanges</a>
                    <a href="community.html" class="text-white hover:text-[#40E0D0] transition-colors">Community</a>
                </div>

                <!-- Mobile Menu Button -->
                <button class="md:hidden mobile-menu-button">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <div class="container mx-auto px-4">
                <a href="index.html" class="block py-2 text-white hover:text-[#40E0D0] transition-colors">Home</a>
                <a href="about.html" class="block py-2 text-white hover:text-[#40E0D0] transition-colors">About</a>
                <a href="blogs.html" class="block py-2 text-white hover:text-[#40E0D0] transition-colors">Blogs</a>
                <a href="faq.html" class="block py-2 text-white hover:text-[#40E0D0] transition-colors">FAQ</a>
                <a href="exchanges.html" class="block py-2 text-white hover:text-[#40E0D0] transition-colors">Exchanges</a>
                <a href="community.html" class="block py-2 text-white hover:text-[#40E0D0] transition-colors">Community</a>
            </div>
        </div>
    </nav>
    `;

    // Insert header HTML
    document.getElementById('header').innerHTML = headerHtml;

    // Function to handle scroll events
    function initNavScroll() {
        const nav = document.querySelector('.nav-fixed');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });
    }

    // Function to handle mobile menu
    function initMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Initialize everything
    initNavScroll();
    initMobileMenu();
});
