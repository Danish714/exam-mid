// JavaScript for showing/hiding the mobile menu
const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
    menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
});

// JavaScript for form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Process the form data as needed (e.g., send it to a server)
    // You can add AJAX or fetch requests here to submit the data to a server
});
// JavaScript for form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Process the form data as needed (e.g., send it to a server)
    // You can add AJAX or fetch requests here to submit the data to a server
});
// JavaScript for handling the "Details" button click
const detailsButton = document.getElementById('detailsButton');

detailsButton.addEventListener('click', () => {
    // Add code here to display a message when the button is clicked
    const message = "This is the message you want to display.";
    alert(message); // Displays a simple alert with the message
    // You can use other methods to display the message, like creating a modal or updating the DOM.
});
// JavaScript for handling the "Login" button click
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    // Add code here to handle the "Login" button click
    const loginMessage = "You are logged in!";
    alert(loginMessage); // Display a login message
    // You can customize the message and login functionality as needed.
});

// JavaScript for handling the form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Process the form data as needed (e.g., send it to a server)
    // You can add AJAX or fetch requests here to submit the data to a server

    // Show a submission message
    const submissionMessage = `Thank you, ${firstName}! Your submission has been received.`;
    alert(submissionMessage);
});
