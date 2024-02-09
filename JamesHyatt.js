// Clock {hh:mm:ss}
function startClock() {
    const timeElement = document.getElementById("clock");

    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Format the string with leading zeroes
        const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        timeElement.innerText = clockStr;
    }

    updateTime();
    setInterval(updateTime, 1000);
} 
