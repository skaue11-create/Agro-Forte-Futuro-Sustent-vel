
// Aguarda o DOM estar totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENU HAMBURGUER (MOBILE)
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");
    const linksMenu = document.querySelectorAll(".nav-menu a");

    // Abre e fecha o menu ao clicar no botão
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("ativo");
        menuToggle.classList.toggle("aberto");
    });

    // Fecha o menu automaticamente ao clicar em qualquer link
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("ativo");
            menuToggle.classList.remove("aberto");
        });
    });


    // 2. MODIFICAÇÃO DO HEADER COM O SCROLL
    const header = document.getElementById("main-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("rolamento");
        } else {
            header.classList.remove("rolamento");
        }
    });


    // 3. ANIMAÇÃO DE APARECIMENTO (SCROLL REVEAL)
    const elementosAnimar = document.querySelectorAll(".animar");

    const checarScroll = () => {
        elementosAnimar.forEach(elemento => {
            const elementoTopo = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight * 0.85; // Dispara a animação um pouco antes do item chegar ao meio da tela

            if (elementoTopo < alturaTela) {
                elemento.classList.add("ativo");
            }
        });
    };

    // Executa uma vez ao carregar para itens que já estão na tela e depois no scroll
    checarScroll();
    window.addEventListener("scroll", checarScroll);
});
