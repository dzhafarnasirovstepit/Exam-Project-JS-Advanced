document.addEventListener('DOMContentLoaded', function () {
    
    const taskId = new URLSearchParams(window.location.search).get('id');

    const taskDetails = {
        taskName: 'Sample Task',
        taskDescription: 'This is a sample task description.'
    };

    document.getElementById('taskName').innerText = taskDetails.taskName;
    document.getElementById('taskDescription').innerText = taskDetails.taskDescription;
});