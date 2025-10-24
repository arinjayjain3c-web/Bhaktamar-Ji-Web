document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropbtn = document.querySelector('.dropbtn'); // Select the 'More ▼' element

    // --- 1. HAMBURGER MENU TOGGLE LOGIC ---
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // --- 2. SMART AUTO-CLOSE LOGIC ---
        // Close mobile menu ONLY when a NON-DROPDOWN link is clicked
        document.querySelectorAll('.nav-links a, .nav-links span').forEach(element => {
            
            // CRITICAL: Check if the element is NOT the dropdown button
            if (!element.classList.contains('dropbtn')) {
                
                element.addEventListener('click', () => {
                    // Only close the menu if it's currently open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                });
            }
        });
    }

    // --- 3. DROPDOWN CLICK HANDLER (Prevents accidental navigation) ---
    if (dropbtn) {
        dropbtn.addEventListener('click', (e) => {
            // Prevent default link action (if it's an <a>)
            if (dropbtn.tagName === 'A') {
                e.preventDefault();
            }
            // Stop the click from bubbling up and activating any parent click handlers
            e.stopPropagation(); 
            
            // IMPORTANT: If you want the dropdown to OPEN on click on mobile (since :hover fails)
            // you should uncomment this line and ensure the .dropdown class is styled to open 
            // the .dropdown-content when it has the 'open' class on mobile.
            // const dropdown = dropbtn.closest('.dropdown');
            // if (dropdown) {
            //     dropdown.classList.toggle('open');
            // }
        });
    }
});