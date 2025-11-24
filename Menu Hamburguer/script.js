document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão do menu e alinha de navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Função para alternar a visibilidade do menu
    funcion toggleMenu() {
        navList.classList.toggle('active');m // Adiciona/remove a classe 'active'
    }

    // Adiciona um ouvinte de evento ao botão de alternar menu
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    //Fecha o menu quando um link é clicado (útil em mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // Implementando scroll suave para as âncoras
    document.querySelectorAll('a[href^="#]').forEach(anchor => {
        anchor.addEventListener('click', funcion (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição de rolagem, ajustando para o header fixo
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + windows.pageYOffset;
                const offsetPosition = elementPosition headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Rolagem suave
                });
            }

        });
    });



});