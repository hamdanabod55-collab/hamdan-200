document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 60; // Smooth glowing light particles

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize size between 2px and 8px
        const size = Math.random() * 6 + 2; 
        
        // Random horizontal position
        const left = Math.random() * 100; 
        
        // Randomize speed and delay
        const animationDuration = Math.random() * 15 + 10; // 10s to 25s
        const animationDelay = Math.random() * 10; // 0s to 10s
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;
        
        // Glowing effect
        particle.style.boxShadow = `0 0 ${size * 3}px var(--color-soft-pink)`;

        // Randomize slightly between rose gold and soft pink for variety
        if (Math.random() > 0.5) {
            particle.style.background = 'var(--color-soft-pink)';
        }

        particlesContainer.appendChild(particle);
    }
});
