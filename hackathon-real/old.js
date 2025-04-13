document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll("h2[data-popup]");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    const closeBtn = document.getElementById("closePopup");
    const backButton = document.querySelector(".button3");

    const popupMessages = {
        wake: "Gently wake up, take a moment to stretch and hydrate with water from a reusable bottle to start your day mindfully and sustainably. 💧🧘‍♀️♻️🌞",
        breakfast: "Eat a healthy breakfast rich in fiber and protein (e.g., oatmeal, eggs, fruits) with locally sourced ingredients, and take any necessary morning medication with water from a reusable bottle. 🍳🥑🍓💊♻️",
        morningActivities: "Enjoy some quiet time by reading an e-book, listening to music from a streaming service, or doing a crossword puzzle digitally to reduce paper use. 🎧📖🧩🌱",
        lightExercise: "Engage in gentle stretching or a short walk around the house or garden. If mobility allows, consider a yoga class or a light walk outside to enjoy fresh air and connect with nature.",
        lunch: "Relax, enjoy the meal made with locally sourced ingredients, and perhaps chat with family or a friend while using reusable plates and utensils. 🥗🍴👨‍👩‍👧‍👦🌱",
        rest: "Take a short nap (20–30 minutes) or simply rest to recharge, keeping the room well-ventilated and using natural light to create a calming environment. 🛏️💤🌿🌞",
        afternoonActivity: "Engage in a hobby like knitting, gardening, or painting using sustainable materials, or watch a favorite show on a streaming platform. For social engagement, join a local club or connect with friends or family to foster meaningful relationships. 🌿🎨📱👨‍👩‍👧‍👦",
        snack: "Enjoy a light, healthy snack like fruit, nuts, or yogurt, and sip tea or a warm beverage from a reusable mug to stay energized. 🍵🍓🌰♻️",
        socialTime: "Meet a friend or family member in person, or participate in a local community activity, choosing eco-friendly transportation options like walking or biking when possible. 🚶‍♂️🚲🌍👨‍👩‍👧‍👦",
        dinner: "Enjoy a lighter meal with vegetables, lean protein, and healthy grains, made with locally sourced ingredients. Focus on savoring the food and use reusable dinnerware to reduce waste. 🥦🍚🍗♻️🌱",
        eveningRoutine: "Engage in a relaxing activity like doing a puzzle, knitting with sustainable yarn, journaling on recycled paper, or watching a show. If you enjoy arts or crafts, use eco-friendly materials for your creations. 🎨📺✂️🌱",
        windDown: "Take a warm bath or shower using water-saving techniques, such as shorter showers and a low-flow showerhead, and relax with an e-book or listen to calming music while turning off unnecessary lights. 🛀📖🎶🌱",
        bedtimePrep: "Take any nighttime medications if needed, and set up a calming environment with dim, energy-efficient lighting and soft music to promote restful sleep while minimizing energy use. 🌙💡🎶🌱",
        sleep: "Aim for 7–8 hours of sleep for overall health, ensuring your room is energy-efficient by turning off all unnecessary electronics and using natural ventilation if possible. 🌙💤🌱"
    };

    headings.forEach(h2 => {
        h2.addEventListener("click", () => {
            const key = h2.getAttribute("data-popup");
            popupText.textContent = popupMessages[key] || "No message set.";
            popup.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    backButton.addEventListener("click", function() {
        window.location.href = "index.html";
    }); 

});
