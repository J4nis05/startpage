// Get a random number between the Specified Values
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// Set a random background image
function setRandomBackground() {
    var imgPath = 'img/background-';
    var randomIndex = getRandomNumber(1, 277); // 277 = The Total amount of Images in the img folder
    var paddedIndex = String(randomIndex).padStart(3, '0'); // Pad the number with 0's if it is below 100
    var imgUrl = imgPath + paddedIndex + '.png';

    document.body.style.backgroundImage = `url(${imgUrl})`;
}


// Convert the entered Prompt in the Search Bar into a duckduckgo Search
function handleSearch(event) {
    if (event.key === 'Enter') {
        const searchQuery = event.target.value;
        var searchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchQuery);
        window.location.href = searchUrl;
    }
}


// Load the config.json File
function loadIcons() {
    fetch('../config.json')
        .then(response => response.json())
        .then(data => {
            const iconsDiv = document.getElementById('icons');
            const ul = document.createElement('ul');

            data.items.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                const img = document.createElement('img');
                const p = document.createElement('p');

                a.href = item.ItemURL;
                img.src = `${item.DisplayImage}`;
                img.alt = `${item.DisplayName} Logo`;
                p.textContent = item.DisplayName;

                a.appendChild(img);
                a.appendChild(p);
                li.appendChild(a);
                ul.appendChild(li);
            });

            iconsDiv.appendChild(ul);
        })
        .catch(error => { console.error('Error loading config file:', error); });
}


// Call the function to set a random background when the page loads
window.onload = function() {
    setRandomBackground();
    loadIcons();

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keypress', handleSearch);
};
