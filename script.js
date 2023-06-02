function countdown() {
    // Set the countdown date (YYYY-MM-DD format)
    const countdownDate = new Date('2023-06-04').getTime();
  
    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime();
  
      // Calculate the remaining time
      const distance = countdownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  
      // If the countdown is finished, display a message and stop the timer
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        alert('Countdown finished!');
      }
    }, 1000);
  }
  
  countdown();
  