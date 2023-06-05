// Function to get a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to set a random background image
function setRandomBackground() {
    var imgPath = 'img/background';
    var randomIndex = getRandomNumber(1, 33); // Generates a random number between 1 and 27
    var imgUrl = imgPath + randomIndex + '.jpg';
    document.body.style.backgroundImage = 'url(' + imgUrl + ')';
}

// Function to convert the entered Prompt into a duckduckgo Search
function handleSearch(event) {
    if (event.key === 'Enter') {
        const searchQuery = event.target.value;
        const searchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchQuery);
        window.location.href = searchUrl;
    }
}

// Call the function to set a random background when the page loads
window.onload = function() {
    setRandomBackground();

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keypress', handleSearch);
};
