document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("aboutLink").addEventListener("click", function () {
        window.location.href = "#skills";
    });

    document.getElementById("skillsLink").addEventListener("click", function () {
        window.location.href = "#projects";
    });
    const viewMoreButtons = document.querySelectorAll(".view-more");
    viewMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
});

const menuIcon = document.getElementById("menu");
const cancelIcon = document.getElementById("cancel");
const anchorMenu = document.querySelector(".anchor");

menuIcon.addEventListener("click", () => {
    anchorMenu.style.right = "0";
});

cancelIcon.addEventListener("click", () => {
    anchorMenu.style.top = "-300px";
});
let menu=document.querySelector("#menu");
let cancel=document.querySelector("#cancel");
menu.addEventListener("click", function(){
    let anchor=menu.parentElement.nextElementSibling;
    anchor.style.top="0";
    console.log(anchor);
});
cancel.addEventListener("click", function(){
    let close=cancel.parentElement;
    close.style.right="-200px";
});

// Get the modal
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".viewMoreBtn");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            modals[index].style.display = "flex";
        });
    });

    closeButtons.forEach((closeBtn, index) => {
        closeBtn.addEventListener("click", function () {
            modals[index].style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
        
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
        
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }
        
            // Replace with your WhatsApp number in international format
            const whatsappNumber = '+919894774283'; // Example: +91 for India followed by your number
        
            // Form the WhatsApp message
            const whatsappMessage = `Hello! I have the following details:\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Message: ${message}`;
        
            // Redirect to WhatsApp with pre-filled message
            const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        
            // Display success message if it exists
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
            }
        
            // Reset the form
            this.reset();
        });


        document.addEventListener("DOMContentLoaded", function () {
            const text = "Aishwarya Gangadharan..";
            const span = document.getElementById("typing-text");
            let index = 0;
            let isDeleting = false;
    
            function typeEffect() {
                if (!isDeleting && index < text.length) {
                    span.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeEffect, 100);
                } else if (isDeleting && index > 0) {
                    span.textContent = text.substring(0, index - 1);
                    index--;
                    setTimeout(typeEffect, 50);
                } else {
                    isDeleting = !isDeleting;
                    setTimeout(typeEffect, 1000); // Pause before retyping
                }
            }
    
            typeEffect();
        });