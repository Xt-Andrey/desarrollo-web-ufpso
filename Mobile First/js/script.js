// ===== SCRIPT PRINCIPAL - Delicias A&A =====

document.addEventListener('DOMContentLoaded', () => {
    
    // ===== LÓGICA DEL MENÚ MÓVIL =====
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const menuLinks = mobileMenu.querySelectorAll('.menu-link');
    const body = document.body;

    const iconOpen = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`;
    const iconClose = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;

    const toggleMenu = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            // Abrir menú
            mobileMenu.classList.remove('hidden');
            menuIcon.innerHTML = iconClose;
            body.style.overflow = 'hidden';
        } else {
            // Cerrar menú
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = iconOpen;
            body.style.overflow = 'auto';
        }
    };
    
    menuBtn.addEventListener('click', toggleMenu);
    menuBackdrop.addEventListener('click', toggleMenu);
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // ===== LÓGICA DEL MODAL DE LOGIN =====
    const loginModal = document.getElementById('login-modal');
    const modalContent = document.getElementById('modal-content');
    const openModalButtons = [
        document.getElementById('login-btn-desktop'),
        document.getElementById('login-btn-mobile'),
        document.getElementById('login-btn-cta')
    ];
    const closeModalBtn = document.getElementById('close-modal-btn');

    const openModal = () => {
        // Si el menú móvil está abierto, ciérralo primero
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
        }
        
        loginModal.classList.remove('hidden');
        loginModal.classList.add('flex');
        
        // Pequeño retraso para permitir que 'display' cambie antes de animar
        setTimeout(() => {
            loginModal.classList.remove('opacity-0');
            modalContent.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        }, 10);
        
        body.style.overflow = 'hidden'; // Evitar scroll del body
    };

    const closeModal = () => {
        loginModal.classList.add('opacity-0');
        modalContent.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        
        // Esperar a que termine la transición para ocultarlo
        setTimeout(() => {
            loginModal.classList.add('hidden');
            loginModal.classList.remove('flex');
            body.style.overflow = 'auto'; // Restaurar scroll
        }, 400); // Coincide con la duración de la transición
    };

    openModalButtons.forEach(btn => {
        if(btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        }
    });
    
    closeModalBtn.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera del contenido (en el backdrop)
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeModal();
        }
    });
    
    // Cerrar modal con la tecla 'Escape'
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // ===== LÓGICA DEL FOOTER (AÑO ACTUAL) =====
    document.getElementById('current-year').textContent = new Date().getFullYear();

});