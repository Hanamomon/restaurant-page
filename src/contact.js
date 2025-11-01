function createContactElement(tag, text = "", idName = "", className = "", forVal = "", nameVal = "", typeVal = "") {
    const element = document.createElement(tag);
    if (text)
        element.textContent = text;
    if (idName)
        element.setAttribute("id", idName);
    if (className)
        element.classList.add(className);
    if (forVal)
        element.setAttribute("for", forVal);
    if (nameVal)
        element.setAttribute("name", nameVal);
    if (typeVal)
        element.setAttribute("type", typeVal);
    return element;
}

export default function () {
    const contentDiv = document.getElementById("content");
    const tabDiv = document.createElement("div");
    tabDiv.setAttribute("id", "contact-tab")

    const contactHead = createContactElement("h1", "Want to get in touch with us?");
    const contactText = createContactElement("p", "Use the form below to let us know of any of your protidic inquiries!");
    const contactForm = document.createElement("form");

    const nameDiv = createContactElement("div", "", "", "form-field");
    const nameLabel = createContactElement("label", "Name:", "", "", "name");
    const nameInput = createContactElement("input", "", "name", "", "", "name", "text");
    nameDiv.append(nameLabel, nameInput);

    const addressDiv = createContactElement("div", "", "", "form-field");
    const addressLabel = createContactElement("label", "Email Address:", "", "", "address");
    const addressInput = createContactElement("input", "", "address", "", "", "address", "email");
    addressDiv.append(addressLabel, addressInput);

    const phoneDiv = createContactElement("div", "", "", "form-field");
    const phoneLabel = createContactElement("label", "Phone Number:", "", "", "phone");
    const phoneInput = createContactElement("input", "", "phone", "", "", "phone", "tel");
    phoneDiv.append(phoneLabel, phoneInput);

    const messageDiv = createContactElement("div", "", "", "form-field");
    const messageLabel = createContactElement("label", "Message:", "", "", "message");
    const messageInput = createContactElement("textarea", "", "message", "", "", "message");
    messageInput.setAttribute("rows", "5");
    messageInput.setAttribute("cols", "60");
    messageDiv.append(messageLabel, messageInput);

    const submitBtn = createContactElement("button", "Submit");

    contactForm.append(nameDiv, addressDiv, phoneDiv, messageDiv, submitBtn);

    tabDiv.append(contactHead, contactText, contactForm);
    contentDiv.appendChild(tabDiv);
}