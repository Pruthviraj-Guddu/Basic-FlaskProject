// D:\Documents\Drexel\CS530-ProjectCars\static\js\book_test_drive.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('bookTestDriveForm');
    console.log("log : inside bookTestDriveForm");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var formData = {
            car_id: document.getElementById('car_id').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
        };

        fetch('/api/update_contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert('Test drive booked successfully!');
                // Optionally, redirect the user or clear the form
            } else {
                alert('Failed to book test drive. ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while booking the test drive.');
        });
    });
});

