document.getElementById('startBtn').addEventListener('click', function() {
    const dateInput = document.getElementById('dateInput').value;
    const timeInput = document.getElementById('timeInput').value;

    // Validate inputs
    if (!dateInput || !timeInput) {
        alert("Please set both the date and time for the countdown.");
        return;
    }

    // Combine the date and time into a single datetime string
    const targetDateTime = new Date(`${dateInput}T${timeInput}:00`);

    // Check if the target date is in the future
    const currentDate = new Date();
    if (targetDateTime <= currentDate) {
        alert("Please choose a future date and time.");
        return;
    }

    // Function to update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date();
        const distance = targetDateTime - now;

        // If countdown is over, stop the interval
        if (distance <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Countdown finished!";
            return;
        }

        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the remaining time
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});
