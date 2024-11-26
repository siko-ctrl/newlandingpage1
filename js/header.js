document.addEventListener('DOMContentLoaded', function() {
    const headerHtml = `
    <nav class="nav-fixed">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <a href="index.html" class="flex items-center space-x-2">
                    <img src="images/salvium-logo.png" alt="Salvium Logo" class="h-5 opacity-100">
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="text-white opacity-100 hover:text-[#40E0D0] transition-colors">Home</a>
                    <a href="about.html" class="text-white opacity-100 hover:text-[#40E0D0] transition-colors">About</a>
                    <a href="blogs.html" class="text-white opacity-100 hover:text-[#40E0D0] transition-colors">Blogs</a>
                    <a href="faq.html" class="text-white opacity-100 hover:text-[#40E0D0] transition-colors">FAQ</a>
                    <a href="exchanges.html" class="text-white opacity-100 hover:text-[#40E0D0] transition-colors">Exchanges</a>
                    <a href="community.html" class="text-white opacity-100 hover:text-[#40E0D0] transition-colors">Community</a>
                </div>

                <!-- Mobile Menu Button -->
                <button class="md:hidden mobile-menu-button focus:outline-none">
                    <svg class="w-6 h-6 text-white opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu hidden md:hidden">
            <div class="container mx-auto px-4 py-2">
                <a href="index.html" class="block py-2 text-white opacity-100 hover:text-[#40E0D0] transition-colors">Home</a>
                <a href="about.html" class="block py-2 text-white opacity-100 hover:text-[#40E0D0] transition-colors">About</a>
                <a href="blogs.html" class="block py-2 text-white opacity-100 hover:text-[#40E0D0] transition-colors">Blogs</a>
                <a href="faq.html" class="block py-2 text-white opacity-100 hover:text-[#40E0D0] transition-colors">FAQ</a>
                <a href="exchanges.html" class="block py-2 text-white opacity-100 hover:text-[#40E0D0] transition-colors">Exchanges</a>
                <a href="community.html" class="block py-2 text-white opacity-100 hover:text-[#40E0D0] transition-colors">Community</a>
            </div>
        </div>
    </nav>
    `;

    // Insert header HTML
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHtml;
    }

    // Function to handle scroll events
    function initNavScroll() {
        const nav = document.querySelector('.nav-fixed');
        if (nav) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    nav.classList.add('nav-scrolled');
                } else {
                    nav.classList.remove('nav-scrolled');
                }
            });
        }
    }

    // Function to handle mobile menu
    function initMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    }

    // Initialize everything with a small delay to ensure DOM is ready
    setTimeout(() => {
        initNavScroll();
        initMobileMenu();
    }, 100);
});
