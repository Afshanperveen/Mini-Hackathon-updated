// Sample data structures for users (you should replace this with your database logic)
const users = [];

// Function to handle user signup
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const userType = document.getElementById("user-type").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username is already taken
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        alert("Username is already taken. Please choose a different one.");
        return;
    }

    // Add the new user to the users array
    users.push({ userType, username, password });

    // Clear input fields
    document.getElementById("user-type").value = "admin";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Redirect to the login page (you can customize this based on your project structure)
    window.location.href = "login.html";
});