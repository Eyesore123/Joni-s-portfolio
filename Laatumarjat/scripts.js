// Scroll animation for sections
document.addEventListener('scroll', function () {
    const imageContainer = document.querySelector('.image-container');
    const contentWrapper = document.querySelector('.content-wrapper');

    const scrollPosition = window.scrollY; // Get how far the user has scrolled
    const wrapperOffsetTop = contentWrapper.offsetTop; // Get the top position of the wrapper
    const windowHeight = window.innerHeight; // Height of the viewport
    const screenWidth = window.innerWidth; // Get the screen width

    // Use ternary to check if the screen width is 1440p
    let fadePoint = screenWidth === 2560 ? wrapperOffsetTop - windowHeight + 600 : wrapperOffsetTop - windowHeight + 470;
    let fadeDistance = screenWidth === 2560 ? 400 : 200; // Adjust fade distance for 1440p

    // If the user has scrolled past the fade point, fade the image out
    if (scrollPosition > fadePoint) {
        let opacityValue = 1 - ((scrollPosition - fadePoint) / fadeDistance);
        opacityValue = Math.max(opacityValue, 0); // Ensure opacity doesn't go below 0
        imageContainer.style.opacity = opacityValue;
    } else {
        // Reset opacity if we're above the fade point or scrolling back up
        imageContainer.style.opacity = 1;
    }
});

document.addEventListener('scroll', function () {
    const upperSliders = document.querySelectorAll('.upper-slider');  // Target the new class for upper sliders
    const contentSections = document.querySelectorAll('.lower-slider');  // Keep targeting all content-section elements
    const windowHeight = window.innerHeight;
    const screenWidth = window.innerWidth; // Get the screen width

    // Adjust based on screen width (1440p vs others)
    let upperSlideThreshold = screenWidth === 2560 ? windowHeight - 700 : windowHeight - 420; // For 1440p
    let contentSlideThreshold = screenWidth === 2560 ? windowHeight - 400 : windowHeight - 300;

    // Slide-in effect for upper sliders (with delayed animation)
    upperSliders.forEach(slider => {
        const sliderPosition = slider.getBoundingClientRect().top;

        // Adjust when upper sliders slide in (slide-in later by increasing the number)
        if (sliderPosition < upperSlideThreshold) {  // Delay the effect
            slider.classList.add('visible');
        } else {
            slider.classList.remove('visible'); // Reverse the effect when scrolling back up
        }
    });

    // Slide-in effect for other content sections (normal slide-in timing)
    contentSections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;

        if (sectionPosition < contentSlideThreshold) {  // Slide-in for content sections
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); // Reverse the effect when scrolling back up
        }
    });
});

// Pricing section specific scroll animation
window.addEventListener('scroll', function() {
    var pricingSection = document.querySelector('#pricing');
    var pricingPosition = pricingSection.getBoundingClientRect().top;
    var screenWidth = window.innerWidth; // Get the screen width

    // Prices section comes up sooner
    let pricingThreshold = screenWidth === 2560 ? window.innerHeight + 100 : window.innerHeight + 230;

    if (pricingPosition < pricingThreshold) {
        pricingSection.classList.add('visible');
    } else {
        pricingSection.classList.remove('visible'); // Reappear when scrolling back up
    }
});

// Fade-in for contact form
window.addEventListener('scroll', function() {
    var form = document.querySelector('#contact-us form');
    var formPosition = form.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    const screenWidth = window.innerWidth; // Get the screen width

    let formFadeThreshold = screenWidth === 2560 ? screenPosition - 500 : screenPosition - 400; //

    if (formPosition < formFadeThreshold) {
        form.classList.add('visible');
    }
});
