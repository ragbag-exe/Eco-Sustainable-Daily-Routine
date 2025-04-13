document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    const closePopup = document.getElementById("closePopup");
    const backButton = document.querySelector(".button3");

    const popupMessages = {
        wake: "Freshen up using minimal water, hydrate with a reusable bottle, and do a short 10–20 min workout or stretch in natural light. 💧🌞🧘‍♀️♻️",
        breakfast: "Eat a solid, locally sourced breakfast, and if you have time, read, journal on recycled paper, or catch up on news/podcasts while enjoying your meal. 🥑📖🎧🌿",
        getReady: "Dress in eco-friendly fabrics, prep what’s needed for the day using reusable bags or containers, and commute sustainably by walking, biking, or using public transport if possible. 🚶‍♂️🚲♻️🎒",
        workStart: "Focus on top priorities while minimizing energy use by turning off unnecessary devices and using digital tools to stay organized. 💻⚡📋🌱",
        quickBreak: "Take 5–10 minutes to walk, stretch, or grab coffee in a reusable cup to recharge sustainably. 🌱🚶‍♀️☕♻️",
        lunch: "Step away from your desk, eat a balanced, plant-based meal, and refresh your mind while minimizing waste by using reusable containers. 🥗🍱🌿♻️",
        workBack: "Knock out tasks, attend meetings virtually when possible to reduce travel, and finish up your to-dos while minimizing paper use. 💻📋🌱📅",
        workEnd: "Shut down work, reflect on what got done, and log off while ensuring your devices are powered down to save energy. 💻🔋🌱✅.",
        exercise: "Move your body with a walk or bike ride, or dive into a hobby that doesn’t require energy use, like drawing or reading. 🌿🚶‍♂️🎨📚",
        dinner: "Relax with a good, sustainably sourced meal, eat mindfully, and enjoy quality time with family or friends while using reusable plates and utensils. 🥦🍴👨‍👩‍👧‍👦🌍",
        unwind: "Watch a show on a streaming platform to reduce energy usage, read an e-book, or work on a side project using digital tools to minimize paper waste. 📱📚💻🌿",
        bedtime: "Light wind-down routine with eco-friendly skin care products, reading an e-book, or practicing breathing exercises in a dimly lit room to save energy. 🌙📖🌱🛏️",
        sleep: "Aim for 7–8 hours of sleep, ensuring your room is energy-efficient by turning off unnecessary lights and using natural ventilation if possible. 🌙💤🌱"
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
