
    // Set the launch date and time (in UTC)
    const launchDate = new Date('December 31, 2023 00:00:00 UTC').getTime();

    // Update the countdown every second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText = `${hours}:${minutes}:${seconds}`;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerText = 'Lift-off!';
        }
    }, 1000);
