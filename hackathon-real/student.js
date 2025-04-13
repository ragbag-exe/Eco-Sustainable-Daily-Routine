document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    const closePopup = document.getElementById("closePopup");
    const backButton = document.querySelector(".button3");
  
    const popupMessages = {
      wake: "Freshen up using minimal water, make your bed, and do a quick 5–10 minute stretch or light exercise with natural daylight instead of turning on lights. 💧🛏️🌞🧘‍♂️",
      breakfast: "Eat a healthy, locally sourced, and plant-based breakfast to fuel your brain and body while reducing your carbon footprint. 🥗🌍🍎♻️",
      school: "Focus during class, take digital notes to save paper, and ask questions if you're unsure about anything to make the most of your learning. 💻📚🌱✏️",
      lunch: "Eat a balanced meal packed in a reusable container and take a quick mental break outdoors if possible to connect with nature. 🥦🍱🌳😌",
      home: "Relax for a bit with a healthy, package-free snack, chill with a book or screen-free activity, or take a power nap to recharge sustainably. 🍌📴🛋️😴",
      study: "Do your assignments using digital resources when possible, review class notes electronically, and study in natural light to save energy. 💡💻🌿📝",
      exercise: "Go for a walk, bike ride, or play a sport outdoors to stay active and reduce your carbon footprint while refreshing your brain. 🚲🌳⚽🌞",
      dinner: "Eat a homemade, plant-based meal with family or friends using reusable dishes, and take time to unwind without screens. 🥦🍽️👨‍👩‍👧‍👦🌿",
      review: "Revise a bit using digital notes, read a book, or prep your bag with reusable items for the next day. 📚💻👜🌱",
      wind: "Avoid screens, journal on recycled paper if you like, or listen to calming music to relax and prepare for a restful night. 🎶📖🌙🌿",
      sleep: "Aim for 7–9 hours of sleep, ensuring your room is energy-efficient with natural ventilation or energy-saving lighting. 🌙💤🌱"
    };
  
    // Add click event to all h2s with data-popup
    document.querySelectorAll("h2[data-popup]").forEach((h2) => {
      h2.addEventListener("click", () => {
        const key = h2.getAttribute("data-popup");
        popupText.textContent = popupMessages[key] || "No message set.";
        popup.style.display = "flex";
      });
    });
  
    // Close popup
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // Optional: Click outside the popup to close
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
    backButton.addEventListener("click", function() {
        window.location.href = "index.html";
    }); 
 
  
});
