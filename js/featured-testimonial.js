// Featured Testimonial Slider Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the featured testimonial slider
    initFeaturedTestimonialSlider();
});

function initFeaturedTestimonialSlider() {
    // Get slider elements
    const prevArrow = document.querySelector('.featured-testimonial .prev-arrow');
    const nextArrow = document.querySelector('.featured-testimonial .next-arrow');
    const counter = document.querySelector('.featured-testimonial .featured-testimonial-counter');
    const testimonialContent = document.querySelector('.featured-testimonial-content');
    const testimonialImage = document.querySelector('.featured-testimonial-image img');

    if (!prevArrow || !nextArrow || !counter || !testimonialContent || !testimonialImage) return;

    // Testimonial data
    const testimonials = [
        {
            name: 'Rob Napoli',
            company: 'The Bear Necessities / Omniboost.io',
            text: 'Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.',
            image: 'images/testimonial-woman.jpg'
        },
        {
            name: 'Sarah Johnson',
            company: 'Tech Innovators / Digital Media',
            text: 'Working with BrokenFrameStudio transformed our podcast series. Their attention to detail and creative approach resulted in a professional production that exceeded our expectations. Our audience engagement has increased significantly.',
            image: 'images/testimonial-woman.jpg'
        },
        {
            name: 'Michael Chen',
            company: 'Global Insights Podcast',
            text: 'The team delivered a powerful visual narrative. The final cut was clean, professional, and exactly what we needed to make an impact with our audience. Their technical expertise and creative vision were invaluable.',
            image: 'images/testimonial-woman.jpg'
        },
        {
            name: 'Lisa Wentz',
            company: 'Executive Speaking Coach',
            text: 'Collaborating with Niranjan was seamless. He brought both technical skill and a calm, professional presence to the shoot. The final video reflected exactly the clarity and presence I wanted to convey to my audience.',
            image: 'images/testimonial-woman.jpg'
        },
        {
            name: 'David Williams',
            company: 'Startup Founder / Innovation Hub',
            text: 'From concept to execution, the team delivered exceptional results. Their understanding of our brand voice and audience needs made the entire process smooth and the final product outstanding.',
            image: 'images/testimonial-woman.jpg'
        }
    ];

    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

    // Update the counter display
    function updateCounter() {
        const formattedIndex = (currentIndex + 1).toString().padStart(2, '0');
        counter.innerHTML = formattedIndex + '<span class="featured-testimonial-total">/' + totalTestimonials.toString().padStart(2, '0') + '</span>';
    }

    // Update the testimonial content
    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];

        // Create the HTML for the testimonial content
        const contentHTML = `
            <h3>${testimonial.name}</h3>
            <p class="company">${testimonial.company}</p>
            <p>${testimonial.text}</p>
            <div class="featured-testimonial-controls">
                <span class="featured-testimonial-arrow prev-arrow">&#10094;</span>
                <span class="featured-testimonial-counter">${(currentIndex + 1).toString().padStart(2, '0')}<span class="featured-testimonial-total">/${totalTestimonials.toString().padStart(2, '0')}</span></span>
                <span class="featured-testimonial-arrow next-arrow">&#10095;</span>
            </div>
        `;

        // Apply a fade-out effect
        testimonialContent.style.opacity = '0';
        testimonialImage.style.opacity = '0';

        // Update content after a short delay
        setTimeout(() => {
            testimonialContent.innerHTML = contentHTML;
            testimonialImage.src = testimonial.image;
            testimonialImage.alt = testimonial.name;

            // Re-attach event listeners to the new arrows
            document.querySelector('.featured-testimonial .prev-arrow').addEventListener('click', prevTestimonial);
            document.querySelector('.featured-testimonial .next-arrow').addEventListener('click', nextTestimonial);

            // Apply fade-in effect
            testimonialContent.style.opacity = '1';
            testimonialImage.style.opacity = '1';
        }, 300);
    }

    // Event handlers for navigation
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonial();
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateTestimonial();
    }

    // Add event listeners
    prevArrow.addEventListener('click', prevTestimonial);
    nextArrow.addEventListener('click', nextTestimonial);

    // Add transition effect to the testimonial elements
    testimonialContent.style.transition = 'opacity 0.3s ease';
    testimonialImage.style.transition = 'opacity 0.3s ease';

    // Initialize the first testimonial
    updateTestimonial();
}
