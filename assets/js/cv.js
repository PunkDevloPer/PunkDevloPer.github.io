// script.js

// Función para mostrar/ocultar la descripción de una sección
function toggleDescription(sectionId) {
    var description = document.getElementById(sectionId + "-description");
    description.classList.toggle("show");
}

// Función para mostrar/ocultar las habilidades adicionales
function toggleAdditionalSkills() {
    var additionalSkills = document.getElementById("additional-skills");
    additionalSkills.classList.toggle("show");
}

// Función para cambiar el tema de color
function changeTheme(color) {
    var body = document.body;
    body.classList.remove("theme-blue", "theme-green", "theme-purple");
    body.classList.add("theme-" + color);
}
