document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('album-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        const albumTitle = document.getElementById('album-title').value.trim();
        const albumDescription = document.getElementById('album-description').value.trim();
        const albumArtSelect = document.getElementById('album-art');
        const albumArt = albumArtSelect.options[albumArtSelect.selectedIndex].value;

        // Validate form inputs
        const isAlbumTitleValid = albumTitle.length > 0 && albumTitle.length <= 20;
        const isAlbumDescriptionValid = albumDescription.length > 0 && albumDescription.length <= 40;
        const isAlbumArtValid = albumArt !== '';

        // Clear previous validation errors
        clearValidationErrors();

        // Display validation errors if any
        displayValidationErrors(isAlbumTitleValid, isAlbumDescriptionValid, isAlbumArtValid);

        // If all inputs are valid, create and append album card
        if (isAlbumTitleValid && isAlbumDescriptionValid && isAlbumArtValid) {
            createAlbumCard(albumTitle, albumDescription, albumArt);

            // Reset form inputs
            form.reset();
        }
    });

    // Clear validation errors function
    function clearValidationErrors() {
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    }

    // Display validation errors function
    function displayValidationErrors(titleValid, descValid, artValid) {
        if (!titleValid) {
            setError('album-title', 'Album title must be between 1 and 20 characters');
        }
        if (!descValid) {
            setError('album-description', 'Album description must be between 1 and 40 characters');
        }
        if (!artValid) {
            setError('album-art', 'Please select an album art');
        }
    }

    // Set error message function
    function setError(id, message) {
        const element = document.getElementById(id);
        const feedbackElement = element.nextElementSibling;
        element.classList.add('is-invalid');
        if (feedbackElement) {
            feedbackElement.textContent = message;
        }
    }

    // Create album card function
    function createAlbumCard(title, description, art) {
        const cardHtml = `
            <div class="col">
                <div class="card shadow-sm">
                    <img class="card-img-top" src="img/${art}" alt="Album Art"/>
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            </div>
        `;
        const albumList = document.getElementById('all-albums-list');
        albumList.insertAdjacentHTML('beforeend', cardHtml);
    }
});
