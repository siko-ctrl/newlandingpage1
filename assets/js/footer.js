document.addEventListener('DOMContentLoaded', function() {
    // Get the footer placeholder
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        // Fetch the footer content using absolute path
        fetch('/footer.html')
            .then(response => {
                if (!response.ok) {
                    // If the absolute path fails, try relative path
                    return fetch('./footer.html');
                }
                return response;
            })
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                // Final fallback - try one directory up
                fetch('../footer.html')
                    .then(response => response.text())
                    .then(data => {
                        footerPlaceholder.innerHTML = data;
                    })
                    .catch(err => {
                        console.error('All footer loading attempts failed:', err);
                    });
            });
    }
});
