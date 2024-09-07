document.addEventListener('DOMContentLoaded', function () {
    // Function to enable editing on all elements with the contenteditable attribute
    function enableEditing() {
        var editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(function (element) {
            element.addEventListener('focus', function (e) {
                element.classList.add('editing');
            });
            element.addEventListener('blur', function (e) {
                element.classList.remove('editing');
                saveChanges(element);
            });
        });
    }
    // Function to save changes (this could be extended to save to a database or local storage)
    function saveChanges(element) {
        var newValue = element.innerHTML;
        console.log("Updated content: ".concat(newValue));
        // Optionally, save to local storage
        // localStorage.setItem(element.id, newValue);
    }
    enableEditing();
});
