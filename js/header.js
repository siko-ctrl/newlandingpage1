document.addEventListener('DOMContentLoaded', function() {
    const headerHtml = `
    <nav class="nav-fixed fixed w-full z-50" style="background: rgba(30, 30, 30, 0.98); backdrop-filter: blur(8px); height: 4rem;">
        <div class="container mx-auto px-4 h-full">
            <div class="flex justify-between items-center h-full">
                <!-- Logo -->
                <a href="index.html" class="flex items-center">
                    <img src="./images/salvium_wordmark_white_1024x1024px.svg" alt="Salvium Logo" class="w-24 opacity-100" style="height: auto;">
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <!-- Get Started Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Get Started
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="exchanges.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Exchanges</a>
                                <a href="about.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">About</a>
                                <a href="papers.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Lite Paper</a>
                                <a href="download.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Downloads</a>
                            </div>
                        </div>
                    </div>

                    <!-- Knowledge Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Knowledge
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="faq.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">FAQ</a>
                                <a href="knowledge-base.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Knowledge Base</a>
                                <a href="blogs.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Blog</a>
                            </div>
                        </div>
                    </div>

                    <!-- Tools Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Tools
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="stats.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Stats</a>
                                <a href="explorer.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Explorer</a>
                            </div>
                        </div>
                    </div>

                    <!-- Get Involved Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Get Involved
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="community.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Community</a>
                                <a href="pools.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Pools</a>
                                <a href="roadmap.html" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Roadmap</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="transition-colors" style="color: #40E0D0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden hidden fixed w-full top-16 left-0 right-0" style="background: rgba(30, 30, 30, 0.98); backdrop-filter: blur(8px);" id="mobile-menu">
            <div class="px-4 py-3 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <!-- Get Started Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button">
                        <span>Get Started</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="exchanges.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Exchanges</a>
                        <a href="about.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">About</a>
                        <a href="papers.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Lite Paper</a>
                        <a href="download.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Downloads</a>
                    </div>
                </div>

                <!-- Knowledge Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button">
                        <span>Knowledge</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="faq.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">FAQ</a>
                        <a href="knowledge-base.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Knowledge Base</a>
                        <a href="blogs.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Blog</a>
                    </div>
                </div>

                <!-- Tools Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button">
                        <span>Tools</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="stats.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Stats</a>
                        <a href="explorer.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Explorer</a>
                    </div>
                </div>

                <!-- Get Involved Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button">
                        <span>Get Involved</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="community.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Community</a>
                        <a href="pools.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Pools</a>
                        <a href="roadmap.html" class="block py-2 transition-all duration-200" style="color: #40E0D0">Roadmap</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;

    // Insert the header HTML
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHtml;
    }

    // Initialize dropdowns
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDropdownButtons = document.querySelectorAll('.mobile-dropdown-button');

    // Desktop dropdown functionality
    dropdownButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const clickedMenu = button.nextElementSibling;
            
            // Close all other dropdowns first
            dropdownMenus.forEach((menu) => {
                if (menu !== clickedMenu && !menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            });

            // Toggle the clicked dropdown
            clickedMenu.classList.toggle('hidden');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdownMenus.forEach(menu => {
            menu.classList.add('hidden');
        });
    });

    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile dropdown functionality with arrow rotation
    mobileDropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const clickedMenu = button.nextElementSibling;
            const clickedArrow = button.querySelector('svg');
            
            // Close all other mobile dropdowns first
            mobileDropdownButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherMenu = otherButton.nextElementSibling;
                    const otherArrow = otherButton.querySelector('svg');
                    if (!otherMenu.classList.contains('hidden')) {
                        otherMenu.classList.add('hidden');
                        otherArrow.style.transform = 'rotate(0deg)';
                    }
                }
            });

            // Toggle the clicked dropdown
            clickedMenu.classList.toggle('hidden');
            
            // Rotate the arrow
            if (clickedMenu.classList.contains('hidden')) {
                clickedArrow.style.transform = 'rotate(0deg)';
            } else {
                clickedArrow.style.transform = 'rotate(180deg)';
            }
        });
    });
});
