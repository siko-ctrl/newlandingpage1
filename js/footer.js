document.addEventListener('DOMContentLoaded', function() {
    const footerHtml = `
    <footer class="py-12 border-t border-[#40E0D0]/10">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <img src="./images/salvium-logo.png" alt="Salvium Logo" class="h-12 mb-6">
                    <p class="text-gray-400">The next generation of private, secure, and efficient decentralized finance.</p>
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
                    <h4 class="text-lg font-semibold mb-4">Community</h4>
                    <ul class="space-y-2">
                        <li><a href="https://twitter.com/SalviumProtocol" class="text-gray-400 hover:text-[#40E0D0]">Twitter</a></li>
                        <li><a href="https://t.me/salviumprotocol" class="text-gray-400 hover:text-[#40E0D0]">Telegram</a></li>
                        <li><a href="https://discord.gg/salvium" class="text-gray-400 hover:text-[#40E0D0]">Discord</a></li>
                        <li><a href="https://github.com/salvium" class="text-gray-400 hover:text-[#40E0D0]">GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Resources</h4>
                    <ul class="space-y-2">
                        <li><a href="papers.html" class="text-gray-400 hover:text-[#40E0D0]">Litepaper</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Terms of Service</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center text-gray-400 text-sm">
                <p>&copy; 2024 Salvium Protocol. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Insert footer HTML
    document.getElementById('footer').innerHTML = footerHtml;
});
