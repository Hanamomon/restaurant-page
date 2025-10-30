import bologneseImg from './images/bolognese.jpg'; // https://unsplash.com/photos/spaghetti-and-meatballs-with-basil-garnish-shot-close-up-HTpiHBRoBIc
import wrapImg from './images/wrap.jpg'; // https://unsplash.com/photos/beef-shawarma-SNLfVYmL8os
import granolaImg from './images/granola.jpg'; // https://unsplash.com/photos/sliced-fruit-and-kiwi-on-plate-z5bPsP916QA
import vanillaImg from './images/vanilla.jpg'; // https://unsplash.com/photos/a-healthy-smoothie-bowl-with-fruit-and-granola-fMc7IIC70ig
import toastImg from './images/toast.jpg'; // https://unsplash.com/photos/white-plate-CRoF0GJ3QJQ
import berryImg from './images/berry.jpg'; // https://unsplash.com/photos/two-fruit-shake-on-glasses-cjiJUfFCoUs
import choccyImg from './images/choccy.jpg'; // https://unsplash.com/photos/clear-glass-jar-with-white-liquid-on-white-ceramic-plate-kjo-JCaYzkc
import mochaImg from './images/mocha.jpg'; // https://unsplash.com/photos/clear-glass-jar-with-brown-liquid-2YWwHMwguZk

function createMenuElement(tag, text = "", className = "", idName = "") {
    const element = document.createElement(tag);
    if (text)
        element.textContent = text;
    if (className)
        element.classList.add(className);
    if (idName)
        element.setAttribute("id", idName);
    return element;
}

function createImage(url = "", className = "") {
    const element = document.createElement("div");
    if (url)
        element.style.backgroundImage = `url(${url})`;
    if (className)
        element.classList.add(className);
    return element;
}

export default function () {
    const contentDiv = document.getElementById("content");

    const menuHead = createMenuElement("h1", "Menu");

    const mealDiv = createMenuElement("div", "", "menu-section-container");
    mealDiv.appendChild(createMenuElement("h2", "Meals"));
    const mealItems = [
        {itemName: "Spaghetti Bolognese", itemDescription: "Donec faucibus fermentum nisl at finibus. Nullam sollicitudin at lacus ut suscipit. Interdum et malesuada fames ac ante ipsum primis.", itemImage: bologneseImg, itemPrice: "18.99$"},
        {itemName: "Very Caloric Wrap", itemDescription: "Donec orci ipsum, ornare sit amet dignissim ut, varius placerat arcu. Donec eget magna eget turpis gravida lobortis sit amet.", itemImage: wrapImg, itemPrice: "15.99$"}
    ];
    mealItems.forEach(item => {
        const mealItemDiv = createMenuElement("div", "", "menu-item-container");
        const mealItemName = createMenuElement("h3", item.itemName);
        const mealItemDesc = createMenuElement("p", item.itemDescription, "menu-item-desc");
        const mealItemPrice = createMenuElement("p", item.itemPrice, "menu-item-price");
        const mealItemImage = createImage(item.itemImage, "", "menu-item-image");
        mealItemDiv.append(mealItemName, mealItemImage, mealItemDesc, mealItemPrice);
        mealDiv.appendChild(mealItemDiv);
    })

    const dessertDiv = createMenuElement("div", "", "menu-section-container");
    dessertDiv.appendChild(createMenuElement("h2", "Desserts"));
    const dessertItems = [
        {itemName: "Fruity Granola Bowl", itemDescription: "Fusce maximus, est nec semper finibus, elit felis laoreet tellus, at hendrerit libero diam et nibh. Nam placerat, est vel.", itemImage: granolaImg, itemPrice: "9.99$"},
        {itemName: "Vanilladisiac Oats", itemDescription: "Etiam sed facilisis justo. Aliquam enim erat, venenatis vel massa eu, lobortis rutrum purus. Proin iaculis accumsan dui, id sagittis.", itemImage: vanillaImg, itemPrice: "8.99$"},
        {itemName: "Toasted", itemDescription: "Nunc pharetra feugiat sem ac consectetur. Quisque pellentesque aliquet justo, in lacinia nibh imperdiet ut. Morbi ac lectus nec lacus.", itemImage: toastImg, itemPrice: "4.99$"}
    ];
    dessertItems.forEach(item => {
        const dessertItemDiv = createMenuElement("div", "", "menu-item-container");
        const dessertItemName = createMenuElement("h3", item.itemName);
        const dessertItemDesc = createMenuElement("p", item.itemDescription, "menu-item-desc");
        const dessertItemPrice = createMenuElement("p", item.itemPrice, "menu-item-price");
        const dessertItemImage = createImage(item.itemImage, "", "menu-item-image");
        dessertItemDiv.append(dessertItemName, dessertItemImage, dessertItemDesc, dessertItemPrice);
        dessertDiv.appendChild(dessertItemDiv);
    })

    const shakeDiv = createMenuElement("div", "", "menu-section-container");
    shakeDiv.appendChild(createMenuElement("h2", "Shakes"));
    const shakeItems = [
        {itemName: "Berryblend", itemDescription: "Phasellus accumsan purus velit, et pellentesque dui hendrerit sit amet. Aliquam sapien dolor, placerat eget facilisis id, euismod et nulla.", itemImage: berryImg, itemPrice: "7.99$"},
        {itemName: "Peanut Butter Choccy", itemDescription: "Etiam sodales nibh nec porta luctus. Cras porttitor tincidunt eros, eget auctor dui feugiat sit amet. Mauris et tellus nec.", itemImage: choccyImg, itemPrice: "7.99$"},
        {itemName: "Banana Mocha", itemDescription: "Nam tincidunt elit ut malesuada laoreet. Cras sollicitudin blandit aliquam. Pellentesque dui nulla, faucibus ac luctus quis, cursus vel ligula.", itemImage: mochaImg, itemPrice: "8.49$"}
    ];
    shakeItems.forEach(item => {
        const shakeItemDiv = createMenuElement("div", "", "menu-item-container");
        const shakeItemName = createMenuElement("h3", item.itemName);
        const shakeItemDesc = createMenuElement("p", item.itemDescription, "menu-item-desc");
        const shakeItemPrice = createMenuElement("p", item.itemPrice, "menu-item-price");
        const shakeItemImage = createImage(item.itemImage, "", "menu-item-image");
        shakeItemDiv.append(shakeItemName, shakeItemImage, shakeItemDesc, shakeItemPrice);
        shakeDiv.appendChild(shakeItemDiv);
    })

    contentDiv.append(menuHead, mealDiv, dessertDiv, shakeDiv);
}