const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        e.preventDefault();
        status.textContent = "Enter a valid email address.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Sending...";
    status.style.color = "black";
});

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
