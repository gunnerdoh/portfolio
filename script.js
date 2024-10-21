'use strict';

(function() {
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initVanta();
        initNavigation();
        showSection('about');
    }

    function initVanta() {
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
    }

    function initNavigation() {
        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const target = button.getAttribute('data-target');
                showSection(target);
            });
        });
    }

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section-container > div');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }
})();