document.addEventListener('DOMContentLoaded', function() {
    const editForm = document.getElementById('editForm');

    editForm.addEventListener('submit', function(event) {
        event.preventDefault();

        alert('Changes saved successfully!');
    });
});