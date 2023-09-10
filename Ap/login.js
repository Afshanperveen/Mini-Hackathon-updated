// Sample data structures for users (you should replace this with your database logic)
const users = [
    { userType: "admin", username: "admin123", password: "adminpass" },
    { userType: "student", username: "student1", password: "studentpass" }
];

// Function to handle user login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find the user based on the entered username
    const user = users.find((user) => user.username === username);

    // Check if the user exists and the password matches
    if (user && user.password === password) {
        // Redirect the user to their respective dashboard based on user type
        if (user.userType === "admin") {
            window.location.href = "admin-dashboard.html";
        } else if (user.userType === "student") {
            window.location.href = "student-dashboard.html";
        }
    } else {
        alert("Invalid username or password. Please try again.");
    }

    // Clear input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});