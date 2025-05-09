document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.querySelector('.hero-content h1 span');
    if (!heroHeading) {
        console.error('Hero heading span not found!');
        return;
    }

    const taglines = [
        "Crafting impactful podcasts through brand storytelling & creativity",
        "Unleash Your Voice: Podcasts That Resonate and Inspire",
        "Sound Stories: Weaving Narratives That Captivate Audiences",
        "Beyond the Mic: Strategic Podcasting for Brand Growth",
        "Your Message, Amplified: Creative Audio Experiences",
        "Innovative Podcasting: Where Ideas Find Their Voice",
        "The Art of Audio: Engaging Content, Expertly Produced"
    ];

    let currentTaglineIndex = 0;
    const animationDelay = 3000; // milliseconds

    function animateHeading() {
        // Fade out
        heroHeading.style.opacity = 0;

        setTimeout(() => {
            currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
            heroHeading.textContent = taglines[currentTaglineIndex];
            // Fade in
            heroHeading.style.opacity = 1;
        }, 500); // Half a second for the fade out/in
    }

    // Initial text
    heroHeading.textContent = taglines[0];
    heroHeading.style.opacity = 1; // Ensure it's visible initially

    setInterval(animateHeading, animationDelay);
});