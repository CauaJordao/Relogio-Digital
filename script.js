function updateClock() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('pt-BR', { month: 'long' });
    const year = now.getFullYear();
    document.getElementById('date').textContent = `${day} de ${month} de ${year}`;
}

setInterval(updateClock, 1000);
updateClock();  
