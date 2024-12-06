document.addEventListener('DOMContentLoaded', function () {
    // Selezione degli elementi
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextSlideButton = document.getElementById('next-slide');

    // Stato iniziale del carosello
    let currentSlide = 0;

    // Funzione per cambiare slide (solo se il carosello esiste sulla pagina corrente)
    if (carouselSlide) {
        function changeSlide() {
            carouselSlide.style.transform = `translateX(-${currentSlide * 100}vw)`;
        }

        // Cambio slide ogni 10 secondi (automatico)
        setInterval(() => {
            currentSlide = (currentSlide + 1) % carouselItems.length;
            changeSlide();
        }, 10000);

        // Gestisce il click sul bottone per andare avanti nel carosello
        nextSlideButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % carouselItems.length;
            changeSlide();
        });
    }

    // Gestisce il click sull'icona hamburger (menu)
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('open'); // Apre/chiude la navbar
        menuIcon.classList.toggle('open'); // Cambia l'icona da hamburger a X
    });

    // Validazione form (se presente nella pagina)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Previene l'invio del form per testare la validazione

            const email = document.getElementById('email').value;
            const name = document.getElementById('name').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Controllo email
            if (!email.includes('@')) {
                alert('Inserisci un indirizzo email valido.');
                return;
            }

            if (name.length < 3) {
                alert('Il nome deve contenere almeno 3 caratteri.');
                return;
            }

            if (subject.length === 0 || message.length === 0) {
                alert('Tutti i campi devono essere compilati.');
                return;
            }
        });
    }

    // Gestione della tabella dei progetti
    const projectsButton = document.getElementById('leader-course');
    const projectsTable = document.getElementById('leader-table');

    if (projectsButton && projectsTable) {
        projectsButton.addEventListener('click', () => {
            // Alterna la visibilità della tabella
            if (projectsTable.classList.contains('hidden')) {
                projectsTable.classList.remove('hidden');
                projectsTable.classList.add('open');
            } else {
                projectsTable.classList.add('hidden');
                projectsTable.classList.remove('open');
            }
        });
    } else {
        console.error("leader-course o leader-table non trovato!");
    }

    document.getElementById("leader-course").addEventListener("click", function () {
        const table = document.getElementById("leader-table");
    
        // Aggiunge o rimuove la classe "show" per attivare la transizione
        if (table.classList.contains("show")) {
            table.classList.remove("show");
        } else {
            table.classList.add("show");
        }
    });
    

    console.log('La pagina è stata caricata!');
});

