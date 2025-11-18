export default function loadAbout() {
    const container = document.getElementById("content");
    container.textContent = ""; // Clear previous tab

    // Main wrapper
    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");

    // Header
    const header = document.createElement("h1");
    header.textContent = "About Us";
    aboutContent.appendChild(header);

    // Intro text
    const intro = document.createElement("p");
    intro.classList.add("about-intro");
    intro.textContent =
        "At La Luna Bistro, our mission is to share the warmth, flavor, and tradition of Mediterranean cooking through fresh ingredients, handcrafted dishes, and a passion for hospitality.";
    aboutContent.appendChild(intro);

    // --- Helper function for about cards ---
    function createCard(titleText, bodyText) {
        const card = document.createElement("div");
        card.classList.add("card", "about-card");

        const title = document.createElement("h3");
        title.textContent = titleText;
        card.appendChild(title);

        const p = document.createElement("p");
        p.textContent = bodyText;
        card.appendChild(p);

        return card;
    }

    // --- Create individual cards ---

    const storyCard = createCard(
        "Our Story",
        "La Luna Bistro began as a small family dream—a place where Mediterranean flavors could be enjoyed with a modern twist. Inspired by the coastal kitchens of Greece, Italy, and Spain, our chefs bring warmth and tradition to every plate."
    );

    const philosophyCard = createCard(
        "Our Philosophy",
        "We believe great food starts with great ingredients. That's why we partner with local farms, source organic produce whenever possible, and make everything in-house—from sauces to breads to desserts."
    );

    const missionCard = createCard(
        "Our Mission",
        "Our mission is simple: to create moments of joy through food, community, and culture. We strive to make every guest feel welcomed, appreciated, and well-fed."
    );

    // Append cards to page
    aboutContent.append(storyCard, philosophyCard, missionCard);

    // Append page to container
    container.appendChild(aboutContent);
}
