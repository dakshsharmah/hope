// Testimonial Slider Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the testimonial slider
    initTestimonialSlider();
});

function initTestimonialSlider() {
    // Get slider elements
    const prevArrow = document.querySelector('.testimonial-slider .prev-arrow');
    const nextArrow = document.querySelector('.testimonial-slider .next-arrow');
    const counter = document.querySelector('.testimonial-slider .slider-counter');
    const testimonialContainer = document.querySelector('.testimonial-slider .testimonial');

    if (!prevArrow || !nextArrow || !counter || !testimonialContainer) return;

    // Testimonial data
    const testimonials = [
        {
            name: 'Rob Napoli',
            company: 'The Bear Necessities / Omniboost.io',
            text: 'Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.',
            image: 'images/icon-social-media-placeholder.png'
        },
        {
            name: 'Sarah Johnson',
            company: 'Tech Innovators / Digital Media',
            text: 'Working with BrokenFrameStudio transformed our podcast series. Their attention to detail and creative approach resulted in a professional production that exceeded our expectations. Our audience engagement has increased significantly.',
            image: 'images/icon-social-media-placeholder.png'
        },
        {
            name: 'Michael Chen',
            company: 'Global Insights Podcast',
            text: 'The team delivered a powerful visual narrative. The final cut was clean, professional, and exactly what we needed to make an impact with our audience. Their technical expertise and creative vision were invaluable.',
            image: 'images/icon-social-media-placeholder.png'
        },
        {
            name: 'Lisa Wentz',
            company: 'Executive Speaking Coach',
            text: 'Collaborating with Niranjan was seamless. He brought both technical skill and a calm, professional presence to the shoot. The final video reflected exactly the clarity and presence I wanted to convey to my audience.',
            image: 'images/icon-social-media-placeholder.png'
        },
        {
            name: 'David Williams',
            company: 'Startup Founder / Innovation Hub',
            text: 'From concept to execution, the team delivered exceptional results. Their understanding of our brand voice and audience needs made the entire process smooth and the final product outstanding.',
            image: 'images/icon-social-media-placeholder.png'
        }
    ];

    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

    // Update the counter display
    function updateCounter() {
        const formattedIndex = (currentIndex + 1).toString().padStart(2, '0');
        counter.innerHTML = formattedIndex + '<span class="slider-total">/' + totalTestimonials.toString().padStart(2, '0') + '</span>';
    }

    // Update the testimonial content
    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];

        // Create the HTML for the testimonial
        const contentHTML = `
            <div class="testimonial-content">
                <h3>${testimonial.name}</h3>
                <p class="company">${testimonial.company}</p>
                <hr>
                <p>${testimonial.text}</p>
            </div>
            <div class="testimonial-image-container">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
            </div>
        `;

        // Apply a fade-out effect
        testimonialContainer.style.opacity = '0';

        // Update content after a short delay
        setTimeout(() => {
            testimonialContainer.innerHTML = contentHTML;
            // Apply fade-in effect
            testimonialContainer.style.opacity = '1';
        }, 300);

        updateCounter();
    }

    // Event listeners for navigation
    prevArrow.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonial();
    });

    nextArrow.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateTestimonial();
    });

    // Add transition effect to the testimonial container
    testimonialContainer.style.transition = 'opacity 0.3s ease';

    // Initialize the first testimonial
    updateTestimonial();
}
