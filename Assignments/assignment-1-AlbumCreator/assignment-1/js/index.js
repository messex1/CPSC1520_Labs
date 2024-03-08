// Add event listener to the form submit event
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const albumTitle = document.getElementById('album-title').value;
    const albumDescription = document.getElementById('album-description').value;
    const albumArt = document.getElementById('album-art').value;

    // Validate form inputs
    const isAlbumTitleValid = validateAlbumTitle(albumTitle);
    const isAlbumDescriptionValid = validateAlbumDescription(albumDescription);
    const isAlbumArtValid = validateAlbumArt(albumArt);

    // Display validation errors if any
    if (!isAlbumTitleValid) {
        displayValidationError('album-title', 'Album title must be between 1 and 20 characters');
    } else {
        clearValidationError('album-title');
    }

    if (!isAlbumDescriptionValid) {
        displayValidationError('album-description', 'Album description must be between 1 and 40 characters');
    } else {
        clearValidationError('album-description');
    }

    if (!isAlbumArtValid) {
        displayValidationError('album-art', 'Please select an album art');
    } else {
        clearValidationError('album-art');
    }

    // If all inputs are valid, create album card template
    if (isAlbumTitleValid && isAlbumDescriptionValid && isAlbumArtValid) {
        const albumCardTemplate = `
            <div class="col">
                <div class="card shadow-sm">
                    <img class="bd-placeholder-img card-img-top" src="${albumArt}"/>
                    <div class="card-body">
                        <h5 class="card-title">${albumDescription}</h5>
                        <p class="card-text">${albumTitle}</p>
                    </div>
                </div>
            </div>
        `;

        // Add album card template to the container
        document.getElementById('container').innerHTML += albumCardTemplate;

        // Reset form inputs
        document.getElementById('album-title').value = '';
        document.getElementById('album-description').value = '';
        document.getElementById('album-art').value = 'Select album art';
    }
});

// Function to validate album title
function validateAlbumTitle(title) {
    return title.length > 0 && title.length <= 20;
}

// Function to validate album description
function validateAlbumDescription(description) {
    return description.length > 0 && description.length <= 40;
}

// Function to validate album art
function validateAlbumArt(art) {
    return art !== 'Select album art';
}

// Function to display validation error
function displayValidationError(elementId, message) {
    const element = document.getElementById(elementId);
    element.classList.add('is-invalid');
    element.nextElementSibling.textContent = message;
}

// Function to clear validation error
function clearValidationError(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('is-invalid');
    element.nextElementSibling.textContent = '';
}