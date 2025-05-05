const emojis = document.querySelectorAll('.emoji');
const message = document.getElementById('message');
const petalsContainer = document.getElementById('petals');
const heartsContainer = document.getElementById('hearts');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        message.style.opacity = 1;  // Show the "I Love You" message
        generatePetals();          // Generate rose petal effects
        generateHearts();          // Generate heart burst effects
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

function generateHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const animationDelay = Math.random() * 0.5;

        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;
        heart.style.animationDelay = `${animationDelay}s`;

        heartsContainer.appendChild(heart);

        // Remove heart after animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}
