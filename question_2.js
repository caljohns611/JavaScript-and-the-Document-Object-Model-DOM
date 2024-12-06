// task 2
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields!");
    } else {
        alert("Thank you for your message, ", name);
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
        document.getElementById("contactForm").reset();
    }
};