const resourcesDiv = document.getElementById("resources");

// show resources button
const showResourcesButton = document.getElementById("show-resources");

showResourcesButton.addEventListener("click", function() {
    // event handler to show resources
    resourcesDiv.classList.remove("d-none");
});

resourcesDiv.addEventListener("mouseout", function(e) {
    // event handler for mouseout
    e.target.classList.remove("fw-bold");
});

// Add event listener to each "go to resource" button
const goToResourceButtons = document.querySelectorAll(".list-group-item-action .go-to-resource-button");
goToResourceButtons.forEach(button => {
    button.addEventListener("mouseover", function() {
        // Add bold class to the parent div
        this.closest(".list-group-item-action").classList.add("fw-bold");
        // Add bold class to the resource text
        this.closest(".list-group-item-action").querySelector(".resource-text").classList.add("fw-bold");
    });

    button.addEventListener("mouseout", function() {
        // Remove bold class from the parent div
        this.closest(".list-group-item-action").classList.remove("fw-bold");
        // Remove bold class from the resource text
        this.closest(".list-group-item-action").querySelector(".resource-text").classList.remove("fw-bold");
    });
});



//below is TASK 4 - DOES NOT FUNCTION PROPERLY



// Assuming goToResourceButtons has already been declared
goToResourceButtons = document.querySelectorAll(".go-to-resource-button");

goToResourceButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const resourceText = this.parentNode.querySelector(".resource-text");
        resourceText.classList.add('fst-italic');
    });
});