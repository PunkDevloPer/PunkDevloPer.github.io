document.addEventListener("DOMContentLoaded", function () {
    const consoleElement = document.getElementById("console");
    const menuContainer = document.getElementById("menu");

    // Prevenir errores si los elementos no existen
    if (!consoleElement || !menuContainer) return;

    const typingSpeed = 30; // Velocidad de escritura (ms por caracter)

    const textToPrint = `
Punkdev@github.io:~$ tree

├── home
│   ├── index.html
│   ├── Blog.html
│       ├── Linux
│       ├── Python
│       ├── Plataformas
│   ├── Plataformas
│       ├── HackmyVM.html
│       ├── Tryhackme.html
│       ├── vulnhub.html
│       ├── vulnyx
├── usr
│   ├── Sobre mi

Punkdev@github.io:~$ cd Menu..

`;

    let index = 0;

    const interval = setInterval(() => {
        consoleElement.textContent += textToPrint[index];
        index++;

        if (index >= textToPrint.length) {
            clearInterval(interval);
            setTimeout(() => {
                menuContainer.style.display = "block"; // Mostrar el menú
            }, 300);
        }
    }, typingSpeed);
});
