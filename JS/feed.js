// Handle star rating
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function () {
        selectedRating = parseInt(star.getAttribute('data-value'));
        updateStars();
    });
});

function updateStars() {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value <= selectedRating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Handle form submission
const form = document.getElementById('feedback-form');
form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const submitButton = document.getElementById('submit-button');
    submitButton.disabled = true;
    submitButton.innerHTML = 'Submitting...';
    // Get form data
    const formData = new FormData(form);
    formData.append('rating', selectedRating);

    // Send form data to a server or Google Apps Script
    await fetch('https://script.google.com/macros/s/AKfycbzpO_Wjf5rq4HvU7HB4aDUOVUXxevn8Wzook6ebMNy2hFyVWCCqZ2d3D9YNRBAGJhUc6w/exec', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                document.getElementById('confirmation').style.display = 'block';
                alert("Thanks for your feedback!");
                form.reset();
                updateStars(); // Reset star selection
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Submit';
        });
});
