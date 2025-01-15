// Plik scripts.js jest przeznaczony do obsługi interakcji użytkownika oraz dynamicznego ładowania treści na stronach. 

document.addEventListener('DOMContentLoaded', function() {
    // Funkcja do obsługi kliknięcia w linki nawigacyjne
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadPage(targetPage);
        });
    });

    // Funkcja do dynamicznego ładowania treści stron
    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.querySelector('#content').innerHTML = html;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
});