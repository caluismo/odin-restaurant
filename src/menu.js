export default function loadMenu() {
    const container = document.getElementById("content");
    container.textContent = ""; // Clear previous tab

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    // Header
    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Our Menu";
    menuContent.appendChild(menuHeader);

    // Intro
    const intro = document.createElement("p");
    intro.textContent = "Discover a curated selection of Mediterranean-inspired dishes, crafted with fresh ingredients and bold flavors.";
    intro.classList.add("menu-intro");
    menuContent.appendChild(intro);

    function createSection(titleText, itemsArray) {
        const section = document.createElement("div");
        section.classList.add("menu-section");

        const title = document.createElement("h3");
        title.textContent = titleText;
        section.appendChild(title);

        const list = document.createElement("ul");
        list.classList.add("menu-list");

        itemsArray.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${item.name}</strong> — ${item.price}<br><small>${item.desc}</small>`;
            list.appendChild(li);
        });

        section.appendChild(list);
        return section;
    }

     // ---- Create Menu Sections ----

    // Appetizers
    const appetizers = createSection("Starters", [
        { name: "Mediterranean Mezze Plate", price: "$12", desc: "Hummus, baba ganoush, olives, warm pita." },
        { name: "Grilled Halloumi", price: "$10", desc: "Seared halloumi cheese with honey and lemon." },
        { name: "Garlic Shrimp", price: "$14", desc: "Shrimp sautéed in garlic and olive oil." }
    ]);

    // Mains
    const mains = createSection("Mains", [
        { name: "Lemon Herb Chicken", price: "$18", desc: "Char-grilled chicken with roasted vegetables." },
        { name: "Spiced Lamb Bowl", price: "$20", desc: "Slow-roasted lamb, turmeric rice, tzatziki." },
        { name: "Seafood Risotto", price: "$22", desc: "Shrimp, mussels, saffron, parmesan." },
        { name: "Vegetarian Flatbread", price: "$15", desc: "Wood-fired flatbread with roasted peppers and feta." }
    ]);

    // Desserts
    const desserts = createSection("Desserts", [
        { name: "Baklava Cheesecake", price: "$8", desc: "Cheesecake layered with pistachio and honey." },
        { name: "Olive Oil Citrus Cake", price: "$7", desc: "Light cake with orange glaze." }
    ]);

    // Drinks
    const drinks = createSection("Drinks", [
        { name: "Fresh Mint Lemonade", price: "$5", desc: "Homemade lemonade with mint." },
        { name: "Turkish Coffee", price: "$4", desc: "Bold, aromatic, traditionally brewed." },
        { name: "House Red Wine", price: "$9 / glass", desc: "Smooth Mediterranean blend." }
    ]);

    // Append sections to page
    menuContent.append(appetizers, mains, desserts, drinks);
    // Append final menu to content container
    container.appendChild(menuContent);
};