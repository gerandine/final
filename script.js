// Configuración de la fecha del evento
const eventDate = new Date("November 20, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Muestra los resultados
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Cuando se complete la cuenta regresiva
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container").innerHTML = "<h2>¡El evento ha comenzado!</h2>";
    }
}

// Actualización cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
