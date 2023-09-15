// Efecto de escala al pasar el mouse sobre las tarjetas
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});