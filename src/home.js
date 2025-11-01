export default function () {
    const contentDiv = document.getElementById("content");
    const tabDiv = document.createElement("div");
    tabDiv.setAttribute("id", "home-tab")

    const headline = document.createElement("h1");

    const restauDiv = document.createElement("div");
    const restauInfo = document.createElement("p");

    const hoursDiv = document.createElement("div");
    const hoursHead = document.createElement("h2");
    const hoursWeekday = document.createElement("p");
    const hoursWeekend = document.createElement("p");

    const locationDiv = document.createElement("div");
    const locationHead = document.createElement("h2");
    const locationText = document.createElement("p");

    headline.textContent = "Mimo's Proteins";
    headline.setAttribute("id", "headline");

    restauInfo.textContent = "Don't want to bother with the time-consuming surveillance and counting of nutrients, yet want to maintain a healthy diet? Mimo's Proteins is your answer! You will find your haven between succulent treats crafted with care for your body and knowledgeable servers that are at your disposal for excellent recommendations. Nothing beats the quality of our meals coupled with helping you make an informed choice. Your wellness is our priority!";
    restauDiv.setAttribute("class", "info-container");
    restauDiv.append(restauInfo);

    hoursHead.textContent = "Hours of Operation";
    hoursWeekday.textContent = "Monday - Saturday: 9AM - 9PM";
    hoursWeekend.textContent = "Friday - Sunday: 10AM - 6PM";
    hoursDiv.setAttribute("class", "info-container");
    hoursDiv.append(hoursHead, hoursWeekday, hoursWeekend);

    locationHead.textContent = "Location";
    locationText.textContent = "906 Lougheed Hwy, Edmonton";
    locationDiv.setAttribute("class", "info-container");
    locationDiv.append(locationHead, locationText);

    tabDiv.append(headline, restauDiv, hoursDiv, locationDiv);
    contentDiv.appendChild(tabDiv);
}