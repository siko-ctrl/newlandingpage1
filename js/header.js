document.addEventListener('DOMContentLoaded', function() {
    const headerHtml = `
    <style>
        .mobile-menu {
            display: none !important;
            position: fixed !important;
            top: 72px !important;
            left: 0 !important;
            right: 0 !important;
            background: rgba(11, 39, 44, 0.98) !important;
            backdrop-filter: blur(8px) !important;
            -webkit-backdrop-filter: blur(8px) !important;
            z-index: 1000 !important;
            height: calc(100vh - 72px) !important;
            transform: translateY(-150%) !important;
            transition: transform 0.3s ease-in-out !important;
            padding: 1rem 0 !important;
        }

        .mobile-menu.active {
            display: block !important;
            transform: translateY(0) !important;
        }

        .mobile-menu a {
            display: block !important;
            padding: 1rem 2rem !important;
            color: white !important;
            font-size: 1.125rem !important;
            transition: color 0.3s ease !important;
        }

        .mobile-menu a:hover {
            color: #40E0D0 !important;
        }
    </style>
    <nav class="nav-fixed" style="background: linear-gradient(to bottom, rgba(40, 40, 40, 0.95), rgba(30, 30, 30, 0.98)); backdrop-filter: blur(8px);">
        <div class="container mx-auto px-4 py-0.5">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <a href="index.html" class="flex items-center">
                    <img src="./images/salvium_wordmark_white_1024x1024px.svg" alt="Salvium Logo" class="w-24 opacity-100" style="height: auto;">
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="text-[#40E0D0] opacity-100 hover:text-[#40E0D0]/80 transition-colors">Home</a>
                    <a href="about.html" class="text-[#40E0D0] opacity-100 hover:text-[#40E0D0]/80 transition-colors">About</a>
                    <a href="blogs.html" class="text-[#40E0D0] opacity-100 hover:text-[#40E0D0]/80 transition-colors">Blogs</a>
                    <a href="faq.html" class="text-[#40E0D0] opacity-100 hover:text-[#40E0D0]/80 transition-colors">FAQ</a>
                    <a href="exchanges.html" class="text-[#40E0D0] opacity-100 hover:text-[#40E0D0]/80 transition-colors">Exchanges</a>
                    <a href="community.html" class="text-[#40E0D0] opacity-100 hover:text-[#40E0D0]/80 transition-colors">Community</a>
                </div>

                <!-- Mobile Menu Button -->
                <button class="md:hidden mobile-menu-button focus:outline-none z-50">
                    <svg class="w-6 h-6 text-white opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path class="menu-open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        <path class="menu-close hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <div class="container mx-auto px-4 py-4">
                <a href="index.html" class="block py-3 text-white text-lg opacity-100 hover:text-[#40E0D0] transition-colors">Home</a>
                <a href="about.html" class="block py-3 text-white text-lg opacity-100 hover:text-[#40E0D0] transition-colors">About</a>
                <a href="blogs.html" class="block py-3 text-white text-lg opacity-100 hover:text-[#40E0D0] transition-colors">Blogs</a>
                <a href="faq.html" class="block py-3 text-white text-lg opacity-100 hover:text-[#40E0D0] transition-colors">FAQ</a>
                <a href="exchanges.html" class="block py-3 text-white text-lg opacity-100 hover:text-[#40E0D0] transition-colors">Exchanges</a>
                <a href="community.html" class="block py-3 text-white text-lg opacity-100 hover:text-[#40E0D0] transition-colors">Community</a>
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
                    nav.style.background = 'linear-gradient(to bottom, rgba(40, 40, 40, 0.98), rgba(30, 30, 30, 0.99))';
                } else {
                    nav.classList.remove('nav-scrolled');
                    nav.style.background = 'linear-gradient(to bottom, rgba(40, 40, 40, 0.95), rgba(30, 30, 30, 0.98))';
                }
            });
        }
    }

    // Function to handle mobile menu
    function initMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuOpenIcon = document.querySelector('.menu-open');
        const menuCloseIcon = document.querySelector('.menu-close');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('active');
                menuOpenIcon.classList.toggle('hidden');
                menuCloseIcon.classList.toggle('hidden');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                    menuOpenIcon.classList.remove('hidden');
                    menuCloseIcon.classList.add('hidden');
                }
            });

            // Close menu when clicking a link
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    menuOpenIcon.classList.remove('hidden');
                    menuCloseIcon.classList.add('hidden');
                });
            });
        }
    }

    // Initialize everything with a small delay to ensure DOM is ready
    setTimeout(() => {
        initNavScroll();
        initMobileMenu();
    }, 100);
});
