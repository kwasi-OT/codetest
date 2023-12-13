let selectedRating;

document.getElementById('rating').style.display = 'flex';
document.getElementById('thankYou').style.display = 'none';

  // Function to handle rating button clicks
function handleButtonClick(event) {
    const rating = event.target.value;
    if (rating) {
        selectedRating = rating;
        document.querySelector('.rating').innerText = selectedRating;
    }
}
// function to handle submit button and event
function handleSubmit() {
    document.getElementById('rating').style.display = 'none';
    document.getElementById('thankYou').style.display = 'flex';
}

// Add click event listeners to rating buttons
const ratingButtons = document.getElementById('ratingButtons');
const submitButton = document.getElementById('submitButton');
ratingButtons.addEventListener('click', handleButtonClick);
submitButton.addEventListener('click', handleSubmit);