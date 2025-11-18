import myImage from './images/restaurant.jpg';
export default function loadHome() {
    const container = document.getElementById("content");
    container.textContent = "";

    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    const subHeader = document.createElement("div");
    subHeader.classList.add("subheadline");
    const subHeaderTxt = document.createElement("h2");
    subHeaderTxt.textContent = "Fresh Mediterranean flavors made with love.";
    subHeader.appendChild(subHeaderTxt);

    const figure = document.createElement("figure");
    figure.classList.add("figure", "card");
    const img = document.createElement("img");
    img.src = myImage;
    img.alt = "Beautiful restaurant";
    img.classList.add("image");
    const figCap = document.createElement("figcaption");
    const figcapTxt = document.createElement("small");
    figcapTxt.textContent = "Image by Interior Design";
    figCap.appendChild(figcapTxt);
    figure.append(img, figCap);

    const descriptCard = document.createElement("div");
    descriptCard.classList.add("description", "card");
    const desHeader = document.createElement("h4");
    desHeader.textContent = "Welcome to La Luna Bistro";
    const desPara = document.createElement("p");
    desPara.textContent = "La Luna Bistro blends modern comfort with the timeless flavors of Mediterranean cooking. From hand-stretched flatbreads to slow-roasted meats and vibrant seasonal salads, every dish is crafted with fresh, locally sourced ingredients. Enjoy a warm, relaxed atmosphere perfect for dinner with friends, family gatherings, or a quiet evening out.";
    descriptCard.append(desHeader, desPara); 

    const whyCard = document.createElement("div");
    whyCard.classList.add("why", "card");
    const whyHead = document.createElement("h4");
    whyHead.textContent = "Why Choose Us";
    const whyList = document.createElement("ul");
    whyList.classList.add("list");
    const whyItem1 = document.createElement("li");
    whyItem1.textContent = "Farm-fresh ingredients delivered daily";
    const whyItem2 = document.createElement("li");
    whyItem2.textContent = "Authentic family recipes with a modern twist";
    const whyItem3 = document.createElement("li");
    whyItem3.textContent = "Warm, inviting atmosphere";
    const whyItem4 = document.createElement("li");
    whyItem4.textContent = "Friendly service and handcrafted dishes";
    whyList.append(whyItem1, whyItem2, whyItem3, whyItem4);
    whyCard.append(whyHead, whyList);

    const hourCard = document.createElement("div");
    hourCard.classList.add("hours", "card");
    const hourHead = document.createElement("h4");
    hourHead.textContent = "Hours of Operation";
    const hourList = document.createElement("ul");
    hourList.classList.add("list");
    const hourItem1 = document.createElement("li");
    hourItem1.textContent = "Mon–Thu: 11am – 9pm";
    const hourItem2 = document.createElement("li");
    hourItem2.textContent = "Fri–Sat: 11am – 11pm";
    const hourItem3 = document.createElement("li");
    hourItem3.textContent = "Sun: 12pm – 8pm";
    hourList.append(hourItem1, hourItem2, hourItem3);
    hourCard.append(hourHead, hourList);

    homeContent.append(subHeader, figure, descriptCard, whyCard, hourCard);
    container.appendChild(homeContent);
};