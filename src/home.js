import myImage from "./images/restaurant.jpg";

function makeElement(tag, classNames = [], text = "") {
    const el = document.createElement(tag);
    if (classNames.length) el.classList.add(...classNames);
    if (text) el.textContent = text;
    return el;
}

function makeList(items, classNames = []) {
    const ul = makeElement("ul", classNames);
    items.forEach(text => {
        const li = makeElement("li", [], text);
        ul.appendChild(li);
    });
    return ul;
}

export default function loadHome() {
    const container = document.getElementById("content");
    container.textContent = "";

    const homeContent = makeElement("div", ["home-content"]);

    // Subheadline
    const subHeader = makeElement("div", ["subheadline"]);
    const subHeaderTxt = makeElement(
        "h2",
        [],
        "Fresh Mediterranean flavors made with love."
    );
    subHeader.appendChild(subHeaderTxt);

    // Figure card
    const figure = makeElement("figure", ["figure", "card"]);
    const img = makeElement("img", ["image"]);
    img.src = myImage;
    img.alt = "Beautiful restaurant";

    const figCap = document.createElement("figcaption");
    const figcapTxt = makeElement("small", [], "Image by Interior Design");
    figCap.appendChild(figcapTxt);
    figure.append(img, figCap);

    // Description card
    const descriptCard = makeElement("div", ["description", "card"]);
    const desHeader = makeElement("h4", [], "Welcome to La Luna Bistro");
    const desPara = makeElement(
        "p",
        [],
        "La Luna Bistro blends modern comfort with the timeless flavors of Mediterranean cooking. From hand-stretched flatbreads to slow-roasted meats and vibrant seasonal salads, every dish is crafted with fresh, locally sourced ingredients. Enjoy a warm, relaxed atmosphere perfect for dinner with friends, family gatherings, or a quiet evening out."
    );
    descriptCard.append(desHeader, desPara);

    // Why card
    const whyCard = makeElement("div", ["why", "card"]);
    const whyHead = makeElement("h4", [], "Why Choose Us");
    const whyList = makeList(
        [
            "Farm-fresh ingredients delivered daily",
            "Authentic family recipes with a modern twist",
            "Warm, inviting atmosphere",
            "Friendly service and handcrafted dishes",
        ],
        ["list"]
    );
    whyCard.append(whyHead, whyList);

    // Hours card
    const hourCard = makeElement("div", ["hours", "card"]);
    const hourHead = makeElement("h4", [], "Hours of Operation");
    const hourList = makeList(
        [
            "Mon–Thu: 11am – 9pm",
            "Fri–Sat: 11am – 11pm",
            "Sun: 12pm – 8pm",
        ],
        ["list"]
    );
    hourCard.append(hourHead, hourList);

    // Put everything together
    homeContent.append(subHeader, figure, descriptCard, whyCard, hourCard);
    container.appendChild(homeContent);
}
