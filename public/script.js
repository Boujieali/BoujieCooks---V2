// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Reservation form submission
const reservationForm = document.querySelector('#reservation form');
reservationForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(reservationForm);
    const reservationData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        guests: formData.get('guests'),
        date: formData.get('date'),
        time: formData.get('time'),
        message: formData.get('message')
    };

    try {
        // Send reservation data to backend
        const response = await fetch('/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationData)
        });

        if (response.ok) {
            // Show success message with green tick
            showSuccessMessage('Your table has been successfully booked!');
            reservationForm.reset();
        } else {
            const errorData = await response.json();
            alert(`Booking failed: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Booking failed. Please try again later.');
    }
});

// Function to display a success message with a green tick
function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <span class="tick">&#10004;</span> ${message}
    `;
    document.body.appendChild(successMessage);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}
// CSS styling for the success message
const style = document.createElement('style');
style.textContent = `
    .success-message {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: #4CAF50;
        color: white;
        font-size: 16px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
    .success-message .tick {
        font-size: 18px;
        margin-right: 8px;
    }
`;
document.head.appendChild(style);
