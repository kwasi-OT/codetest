let selectedRating;

  // Function to handle button clicks
function handleButtonClick(event) {
const rating = event.target.value;
if (rating) {
    selectedRating = rating;
    document.querySelector('.rating').innerText = selectedRating;
}
}

function handleSubmit() {
    document.getElementById('ratingCard').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
}

// Add click event listeners to rating buttons
const ratingButtons = document.getElementById('ratingButtons');
const submitButton = document.getElementById('submitButton');
ratingButtons.addEventListener('click', handleButtonClick);
submitButton.addEventListener('click', handleSubmit);