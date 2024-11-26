document.addEventListener('DOMContentLoaded', function() {
    // Get the footer content directly from the main page
    const footerContent = `
    <footer class="py-12 border-t border-[#40E0D0]/10">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <img src="./images/salvium-logo.png" alt="Salvium Logo" class="h-12 mb-6">
                    <p class="text-gray-400">The next generation of private, secure, and efficient decentralized finance.</p>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Resources</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Documentation</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Whitepaper</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Community</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Discord</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Twitter</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Telegram</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Contact</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Support</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Partnerships</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-[#40E0D0]">Press</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 pt-8 border-t border-[#40E0D0]/10 text-center text-gray-400">
                <p>&copy; 2024 Salvium. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

    // Create a temporary container
    const temp = document.createElement('div');
    temp.innerHTML = footerContent;
    
    // Insert the footer before the closing body tag
    document.body.insertBefore(temp.firstChild, document.body.lastChild);
});
