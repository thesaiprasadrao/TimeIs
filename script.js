function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formatTime = (time) => time.toString().padStart(2, '0');

    document.getElementById('hours').textContent = formatTime(hours % 12 || 12);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('ampm').textContent = ampm;
}

updateClock();
setInterval(updateClock, 1000);

