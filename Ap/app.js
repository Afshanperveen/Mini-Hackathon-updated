  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import {getDatabase, } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_x_gBt6oZc_v1OGwy6Kpifqi78jSov3A",
    authDomain: "smit-hackhaton-attendence-app.firebaseapp.com",
    projectId: "smit-hackhaton-attendence-app",
    storageBucket: "smit-hackhaton-attendence-app.appspot.com",
    messagingSenderId: "127059605456",
    appId: "1:127059605456:web:a21e45c613e4e4878c6bd5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();



// Sample data structures for classes and students (you should replace this with your database logic)
const classes = [];
const students = [];

// Function to add a new class
document.getElementById("class-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const classCourse= document.getElementById("class-course").value;
    const classTime = document.getElementById("class-time").value;
    const classSchedule = document.getElementById("class-schedule").value;
    const classTeacher = document.getElementById("class-teacher").value;
    const classSection = document.getElementById("class-section").value;
    const classBatch = document.getElementById("class-Batch").value;

    
        

    


    // Add class to the classes array
    classes.push({ name: className, time: classTime });

    // Clear input fields
    document.getElementById("class-name").value = "";
    document.getElementById("class-time").value = "";

    // Update the class dropdown with the new class
    updateClassDropdown();
});

// Function to add a new student
document.getElementById("student-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const studentName = document.getElementById("student-name").value;
    const studentRoll = document.getElementById("student-roll").value;

    // Add student to the students array
    students.push({ name: studentName, roll: studentRoll });

    // Clear input fields
    document.getElementById("student-name").value = "";
    document.getElementById("student-roll").value = "";

    // Update the student table with the new student
    updateStudentTable();
});

// Function to update the class dropdown
function updateClassDropdown() {
    const classDropdown = document.getElementById("class-dropdown");
    classDropdown.innerHTML = "";
    
    classes.forEach((classItem, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = classItem.name;
        classDropdown.appendChild(option);
    });
}

// Function to update the student table
function updateStudentTable() {
    const studentTable = document.getElementById("student-table").getElementsByTagName('tbody')[0];
    studentTable.innerHTML = "";
    
    students.forEach((student) => {
        const row = studentTable.insertRow();
        const cellName = row.insertCell(0);
        const cellRoll = row.insertCell(1);
        const cellStatus = row.insertCell(2);
        
        cellName.innerHTML = student.name;
        cellRoll.innerHTML = student.roll;
        cellStatus.innerHTML = "present"; // You can update this with actual status
    });
}

// Initialize the class dropdown and student table
updateClassDropdown();
updateStudentTable();