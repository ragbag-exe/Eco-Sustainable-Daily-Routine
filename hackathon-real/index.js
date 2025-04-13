document.addEventListener("DOMContentLoaded", function () {
    const jobButton = document.querySelector(".button1");
    const studentButton = document.querySelector(".button");
    const elderlyButton = document.querySelector(".button2");


    jobButton.addEventListener("click", function () {
        window.location.href = "9-5.html"; 
    });

    studentButton.addEventListener("click", function () {
        window.location.href = "student.html"; 
    });

    elderlyButton.addEventListener("click", function () {
        window.location.href = "old.html"; 
    });
});