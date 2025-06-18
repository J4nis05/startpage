// Images:
// Wallpaper Sites at  001
// Gruvbox at          045
// Catpuccin at        151
//
// Current Max at 250

function getCookie(name) {
    let cookieName = name + "=";
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookies.split(";");
    let cookieContent = "";

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        // Cut Leading Spaces
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(cookieName) === 0) {
            cookieContent = cookie.substring(cookieName.length, cookie.length);
            break;
        }
    }

    console.log("[COOKIE]     ", "Cookie:", name, "has content:", cookieContent);
    return cookieContent;
}

function setCookie(name, value) {
    let days = 365;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();

    console.log("[COOKIE]     ", "Setting Cookie:", name, "with Content:", value);
    document.cookie = name + "=" + value + expires + "; path=/";
}


function deleteCookie(name) {
    console.log("[COOKIE]     ", "Deleting Cookie:", name);
    document.cookie = name + "=; expires=0; path=/;";
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function setRandomBackground() {
    const imgPath = 'img/background-';
    let randomIndex = getRandomNumber(1, 250);
    let paddedIndex = String(randomIndex).padStart(3, '0');
    let imgUrl = imgPath + paddedIndex + '.png';

    console.log("[BACKGROUND] ", "Setting Background to:", imgUrl);
    document.body.style.backgroundImage = `url(${imgUrl})`;
}


function handleSearch(event) {
    if (event.key === 'Enter') {
        const searchQuery = event.target.value;
        let searchBaseUrl = 'https://duckduckgo.com/?q=';

        if (event.shiftKey || event.ctrlKey) {
            searchBaseUrl = 'https://t3.chat/new?model=gemini-2.5-flash&q=';
        }

        let searchURL = searchBaseUrl + encodeURIComponent(searchQuery);
        console.log("[SEARCH]     ", "Setting new URL:", searchURL);
        window.location.href = searchURL;
    }
}


function applySVGColor(svgElement, color) {
    const paths = svgElement.querySelectorAll('path');
    paths.forEach(path => {
        // Anything that has an ID is probably something special, so ignore it
        if (path.id.length === 0) {
            path.setAttribute('fill', color);
        }
    });
}


function loadIcons(defaultColor) {
    console.log("[BUTTONS]    ", "Parsing Config JSON");
    fetch('../config.json')
        .then(response => response.json())
        .then(data => {
            const iconsDiv = document.getElementById('icons');
            const ul = document.createElement('ul');

            data.items.forEach(item => {
                console.log("[BUTTONS]    ", "Processing Icon:", item.DisplayName);

                const li = document.createElement('li');
                const a = document.createElement('a');
                const img = document.createElement('img');
                const p = document.createElement('p');

                a.href = item.ItemURL;
                img.alt = `${item.DisplayName} Logo`;
                p.textContent = item.DisplayName;

                fetch(item.DisplayImage)
                    .then(response => response.text())
                    .then(svgText => {
                        const parser = new DOMParser();
                        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
                        const svgElement = svgDoc.documentElement;

                        console.log("[BUTTONS]    ", "Setting Icon Color to:", defaultColor, "For Icon:", item.DisplayName);
                        applySVGColor(svgElement, defaultColor);

                        const serializer = new XMLSerializer();
                        const modifiedSVG = serializer.serializeToString(svgElement);
                        const blob = new Blob([modifiedSVG], { type: 'image/svg+xml' });
                        img.src = URL.createObjectURL(blob);
                    })
                    .catch(error => console.error('Error loading SVG:', error));

                a.appendChild(img);
                a.appendChild(p);
                li.appendChild(a);
                ul.appendChild(li);
            });

            iconsDiv.appendChild(ul);
        })
        .catch(error => { console.error('Error loading config file:', error); });
}


window.onload = function() {
    const iconCookieName = "IconColour"
    const iconCookieValue = "#b300f1";
    const textCookieName = "TextColour"
    const textCookieValue = "#b300f1";

    // Create Cookie if it doesn't exist or is empty
    if (!getCookie(iconCookieName)) {
        setCookie(iconCookieName, iconCookieValue);
    }
    if (!getCookie(textCookieName)) {
        setCookie(textCookieName, textCookieValue);
    }

    let iconColor = getCookie(iconCookieName);
    setRandomBackground();
    loadIcons(iconColor);

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keypress', handleSearch);
};
