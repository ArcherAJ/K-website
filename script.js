const emojis = document.querySelectorAll('.emoji');
const message = document.getElementById('message');
const petalsContainer = document.getElementById('petals');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        message.style.opacity = 1;  // Show the "I Love You" message
        generatePetals();          // Generate rose petal effects
    });
});

function generatePetals() {
    for (let i = 0; i < 50; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        const xPos = Math.random() * window.innerWidth;
        const animationDelay = Math.random() * 2;

        petal.style.left = `${xPos}px`;
        petal.style.animationDelay = `${animationDelay}s`;
        
        petalsContainer.appendChild(petal);

        // Remove petal after animation ends
        petal.addEventListener('animationend', () => {
            petal.remove();
        });
    }
}
