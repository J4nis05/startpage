// Function to get a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to set a random background image
function setRandomBackground() {
    var imgPath = 'img/background';
    var randomIndex = getRandomNumber(1, 33); // Generates a random number between 1 and 33
    var imgUrl = imgPath + randomIndex + '.jpg';
    document.body.style.backgroundImage = 'url(' + imgUrl + ')';
}

// Function to convert the entered Prompt into a duckduckgo Search
function handleSearch(event) {
    if (event.key === 'Enter') {
        const searchQuery = event.target.value;
        window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchQuery);
    }
}

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
        .catch(error => {
            console.error('Error loading config file:', error);
        });
}


// Call the function to set a random background when the page loads
window.onload = function() {
    setRandomBackground();
    loadIcons();

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keypress', handleSearch);
};
