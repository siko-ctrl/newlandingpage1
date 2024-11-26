document.addEventListener('DOMContentLoaded', function() {
    const footerHtml = `
    <footer class="py-12 border-t border-[#40E0D0]/10">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div class="text-center mb-8">
                    <img src="./images/salvium_coin_circle_white_solid.svg" alt="Salvium Logo" class="h-12 w-12 mb-6 mx-auto">
                    <p class="text-gray-400 max-w-md mx-auto mb-6">Salvium is revolutionizing the crypto landscape with innovative solutions for secure and efficient trading.</p>
                    <!-- Social Icons -->
                    <div class="flex justify-center space-x-4">
                        <a href="https://twitter.com/SalviumProtocol" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#40E0D0] transition-colors">
                            <i class="fa-brands fa-x text-white text-lg"></i>
                        </a>
                        <a href="https://t.me/salviumprotocol" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#40E0D0] transition-colors">
                            <i class="fa-brands fa-telegram text-white"></i>
                        </a>
                        <a href="https://discord.gg/salvium" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#40E0D0] transition-colors">
                            <i class="fa-brands fa-discord text-white"></i>
                        </a>
                        <a href="https://github.com/salvium" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#40E0D0] transition-colors">
                            <i class="fa-brands fa-github text-white"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="about.html" class="text-gray-400 hover:text-[#40E0D0]">About Us</a></li>
                        <li><a href="blogs.html" class="text-gray-400 hover:text-[#40E0D0]">Blog</a></li>
                        <li><a href="faq.html" class="text-gray-400 hover:text-[#40E0D0]">FAQ</a></li>
                        <li><a href="exchanges.html" class="text-gray-400 hover:text-[#40E0D0]">Exchanges</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Tools</h4>
                    <ul class="space-y-2">
                        <li><a href="download.html" class="text-gray-400 hover:text-[#40E0D0]">Wallets</a></li>
                        <li><a href="https://explorer.salvium.io/" class="text-gray-400 hover:text-[#40E0D0]">Explorer</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Stats</a></li>
                        <li><a href="tools.html" class="text-gray-400 hover:text-[#40E0D0]">3rd Party Tools</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Legal</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Terms of Service</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Cookie Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center text-gray-400 text-sm">
                <p>&copy; ${new Date().getFullYear()} Salvium Protocol. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Insert footer HTML
    document.getElementById('footer').innerHTML = footerHtml;
});
