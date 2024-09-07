document.addEventListener('DOMContentLoaded', () => {
    // Function to enable editing on all elements with the contenteditable attribute
    function enableEditing() {
        const editableElements = document.querySelectorAll('[contenteditable="true"]');

        editableElements.forEach((element) => {
            element.addEventListener('focus', (e) => {
                element.classList.add('editing');
            });

            element.addEventListener('blur', (e) => {
                element.classList.remove('editing');
                saveChanges(element);
            });
        });
    }

    // Function to save changes (this could be extended to save to a database or local storage)
    function saveChanges(element: HTMLElement) {
        const newValue = element.innerHTML;
        console.log(`Updated content: ${newValue}`);
        // Optionally, save to local storage
        // localStorage.setItem(element.id, newValue);
    }

    enableEditing();
});
