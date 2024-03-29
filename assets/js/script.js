document.addEventListener("DOMContentLoaded", function () {
    var consoleElement = document.getElementById("console");
    var menuContainer = document.getElementById("menu"); // Cambiado el selector

    var textToPrint = `
    Punkdev@github.io:~$ tree

    ├── home
    │   ├──index.html
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
    │    ├── Sobre mi
    
    Punkdev@github.io:~$ cd Menu..
    
    
    `;

    var index = 0;

    var interval = setInterval(function () {
        consoleElement.textContent += textToPrint[index];
        index++;

        if (index === textToPrint.length) {
            clearInterval(interval);
            setTimeout(function () {
                menuContainer.style.display = "block"; // Mostrar el menú
            }, 30);
        }

        consoleElement.scrollTop = consoleElement.scrollHeight;
    }, 30);
});
