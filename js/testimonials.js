// Testimonials Animation Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the testimonials slider
    initTestimonialsSlider();
});

function initTestimonialsSlider() {
    const testimonialsContainer = document.querySelector('.testimonials-grid');

    if (!testimonialsContainer) return;

    // Clone testimonial cards for infinite scrolling effect
    const cards = Array.from(testimonialsContainer.querySelectorAll('.testimonial-card'));

    // Create AI-generated testimonial content matching the screenshot
    const placeholderImage = 'https://via.placeholder.com/60x60.png?text=P';
    const aiTestimonials = [
        {
            image: placeholderImage,
            name: 'Autodesk',
            role: 'Forge DevCon',
            stars: 5,
            text: '"Handled the entire video production for our developer conference—from shooting to editing presentations and seminars. Professional, efficient, and delivered exactly what we needed for post-event distribution."'
        },
        {
            image: placeholderImage,
            name: 'Autodesk',
            role: 'Forge DevCon',
            stars: 5,
            text: '"Delivered a clean, professional look. The pacing, and transitions were smooth. Great brand story."'
        },
        {
            image: placeholderImage,
            name: 'Lisa Wentz',
            role: 'Executive Speaking Coach',
            stars: 5, // Adjusted to 5 stars as per image for Lisa Wentz
            text: '"Collaborating with Niranjan was seamless. He brought both technical skill and a calm, professional presence to the shoot. The final video reflected exactly the clarity and presence I wanted to convey to my audience."'
        },
        {
            image: placeholderImage,
            name: 'Michael Chen', // This one is not directly in the screenshot but keeping for variety
            role: 'Tech Innovators Summit',
            stars: 4,
            text: '"A powerful visual narrative. The final cut was clean, exactly what we needed to make an impact."'
        },
        {
            image: placeholderImage,
            name: 'SolidWorks',
            role: 'Make Event',
            stars: 5,
            text: '"The final video captured the vibe of the event perfectly—sharp pacing, great energy, and true to our brand. It was exactly what we hoped for, and the whole process ran smoothly from start to finish."'
        },
        {
            image: placeholderImage,
            name: 'Another Client', // This one is not directly in the screenshot but keeping for variety
            role: 'Startup Founder',
            stars: 5,
            text: '"The post-production quality was exceptional. The audio mixing was clean, precise, and impactful—perfect for our technical audience."'
        },
        // --- Adding more testimonials ---
        {
            image: placeholderImage,
            name: 'Innovate Solutions',
            role: 'Marketing Director',
            stars: 5,
            text: '"Working with them transformed our brand narrative. The podcast series they produced resonated deeply with our target audience."'
        },
        {
            image: placeholderImage,
            name: 'Creative Hub',
            role: 'Lead Designer',
            stars: 4,
            text: '"Their creative input was invaluable. They understood our vision and elevated it with exceptional production quality."'
        },
        {
            image: placeholderImage,
            name: 'EduGrowth',
            role: 'Founder & CEO',
            stars: 5,
            text: '"Professional, efficient, and delivered exactly what we needed for our educational podcast series. Highly recommended."'
        },
        {
            image: placeholderImage,
            name: 'HealthForward',
            role: 'Content Manager',
            stars: 5,
            text: '"The clarity and quality of the final audio were outstanding. They made the entire process seamless and stress-free."'
        },
        {
            image: placeholderImage,
            name: 'TechLeap',
            role: 'CTO',
            stars: 4,
            text: '"Captured the technical nuances perfectly while keeping the content engaging for a broader audience. Great job!"'
        },
        {
            image: placeholderImage,
            name: 'Global Connect',
            role: 'Events Coordinator',
            stars: 5,
            text: '"From concept to final delivery for our virtual summit recordings, the process was smooth and the results exceeded expectations."'
        }
        // --- End of added testimonials ---
    ];

    // Clear existing testimonials
    testimonialsContainer.innerHTML = '';

    // Create main wrapper for animation
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'testimonials-slider-wrapper';
    testimonialsContainer.appendChild(sliderWrapper);

    // Create three row containers
    const row1 = document.createElement('div');
    row1.className = 'testimonial-row testimonial-row-1';
    sliderWrapper.appendChild(row1);

    const row2 = document.createElement('div');
    row2.className = 'testimonial-row testimonial-row-2';
    sliderWrapper.appendChild(row2);

    const row3 = document.createElement('div');
    row3.className = 'testimonial-row testimonial-row-3';
    sliderWrapper.appendChild(row3);

    // Distribute testimonials into three rows
    aiTestimonials.forEach((testimonial, index) => {
        const card = createTestimonialCard(testimonial);
        if (index % 3 === 0) {
            row1.appendChild(card);
        } else if (index % 3 === 1) {
            row2.appendChild(card);
        } else {
            row3.appendChild(card);
        }
    });

    // Aggressive cloning: clone all original cards in each row to ensure maximum buffer for the loop.
    [row1, row2, row3].forEach((row) => {
        const originalCardsInThisRow = Array.from(row.children).filter(card => !card.classList.contains('clone')); // Ensure we only get originals
        if (originalCardsInThisRow.length > 0) {
            originalCardsInThisRow.forEach(originalCard => {
                const clone = originalCard.cloneNode(true);
                clone.classList.add('clone');
                row.appendChild(clone);
            });
        }
    });

    // Start the animation - sliderWrapper is the element being translated.
    // Determine a valid referenceRow that has original children for width calculation
    let referenceRowForWidthCalc = null;
    if (Array.from(row1.children).some(c => !c.classList.contains('clone'))) referenceRowForWidthCalc = row1;
    else if (Array.from(row2.children).some(c => !c.classList.contains('clone'))) referenceRowForWidthCalc = row2;
    else if (Array.from(row3.children).some(c => !c.classList.contains('clone'))) referenceRowForWidthCalc = row3;

    if (referenceRowForWidthCalc) {
        startSliderAnimation(sliderWrapper, referenceRowForWidthCalc);
    } else {
        console.warn("Testimonials: No original content in any row to animate.");
    }
}

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    // Sanitize text to prevent XSS, basic example:
    const sanitize = (str) => {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    };

    const name = sanitize(testimonial.name);
    const role = sanitize(testimonial.role);
    const text = sanitize(testimonial.text);
    const image = testimonial.image ? sanitize(testimonial.image) : 'https://via.placeholder.com/60x60.png?text=P'; // Default placeholder

    card.innerHTML = `
        <div class="card-header">
            <img src="${image}" alt="${name}" class="profile-image">
            <div class="name-role">
                <h4 class="name">${name}</h4>
                <p class="role">${role}</p>
            </div>
        </div>
        <div class="stars">${'★'.repeat(testimonial.stars)}${'☆'.repeat(5 - testimonial.stars)}</div>
        <p class="testimonial-text">${text}</p>
    `;
    return card;
}

function startSliderAnimation(sliderWrapper, referenceRow) { // referenceRow for width calculation
    // Set initial position
    let position = 0;
    const speed = 0.5; // pixels per frame - SLOWED DOWN

    // Defer totalWidth calculation using requestAnimationFrame to ensure styles are applied.
    let totalWidth = 0;

    requestAnimationFrame(() => { // First frame ensures elements are in DOM
        requestAnimationFrame(() => { // Second frame helps ensure styles/dimensions are computed
            const originalCards = Array.from(referenceRow.children).filter(card => !card.classList.contains('clone'));
            if (originalCards.length > 0) {
                totalWidth = 0; // Reset before sum
                originalCards.forEach(card => {
                    const style = getComputedStyle(card);
                    totalWidth += card.offsetWidth + parseInt(style.marginRight || '0', 10);
                });

                console.log("Calculated totalWidth for testimonials: ", totalWidth); // Debug log

                if (totalWidth > 0) {
                    animate(); // Start animation only if width is valid
                } else {
                    console.warn("Testimonial animation: totalWidth calculated as 0. Animation not started.");
                }
            } else {
                console.warn("Testimonial animation: No original cards in reference row. Animation not started.");
            }
        });
    });

    function animate() {
        position -= speed;

        // Precise reset for seamless looping
        if (totalWidth > 0 && position <= -totalWidth) {
             // Add totalWidth to reset position to the start of the cloned sequence
             // Use Math.max to prevent position from becoming positive if overscroll happens weirdly
             position = Math.max(position + totalWidth, -totalWidth + 1); // Keep it slightly negative or zero
             // Simpler reliable reset:
             // position += totalWidth; // This should work correctly for left scroll
        }
        
        // Correction for the reset logic:
        while (totalWidth > 0 && position <= -totalWidth) {
             position += totalWidth;
        }


        sliderWrapper.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }
    // animate() is called inside the deferred calculation callback
}
