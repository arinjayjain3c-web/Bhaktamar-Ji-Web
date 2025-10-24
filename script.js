document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // --- 1. HAMBURGER MENU TOGGLE ---
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 2. CLOSE MOBILE MENU ON LINK CLICK (EXCEPT DROPDOWN BUTTON) ---
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            // Close only if it's not a dropdown button
            if (!link.classList.contains('dropbtn') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');

                // Close any open dropdowns
                dropdowns.forEach(drop => {
                    const dropContent = drop.querySelector('.dropdown-content');
                    dropContent.classList.remove('active');
                });
            }
        });
    });

    // --- 3. DROPDOWN TOGGLE ON MOBILE ---
    dropdowns.forEach(drop => {
        const dropBtn = drop.querySelector('.dropbtn');
        const dropContent = drop.querySelector('.dropdown-content');

        dropBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            e.stopPropagation(); // Stop closing menu

            // Close other dropdowns
            dropdowns.forEach(d => {
                if (d !== drop) {
                    d.querySelector('.dropdown-content').classList.remove('active');
                }
            });

            // Toggle this dropdown
            dropContent.classList.toggle('active');
        });
    });

    // --- 4. CLOSE DROPDOWN IF CLICK OUTSIDE ---
    document.addEventListener('click', (e) => {
        dropdowns.forEach(drop => {
            const dropContent = drop.querySelector('.dropdown-content');
            if (!drop.contains(e.target)) {
                dropContent.classList.remove('active');
            }
        });
    });
});
