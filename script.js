document.addEventListener('DOMContentLoaded', function() {
    VANTA.TRUNK({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        spacing: 2.00,
        chaos: 2.00
    });

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section-container > div');
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
        document.getElementById(sectionId).style.display = 'block'; // Show the selected section
    }

    // Add click event to all buttons
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = button.getAttribute('data-target');
            showSection(target); // Show the corresponding section
        });
    });

    // Initially show the "About me" section
    showSection('about');
});
