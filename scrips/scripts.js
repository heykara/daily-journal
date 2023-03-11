document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("timer");
    let seconds = 300;

    setInterval(() => {
        if (--seconds < 0) {
            seconds = 300;
        }
        const addLeadingZero = (v) => "0".substring(v.length - 1) + v;
        const min = String(Math.floor(seconds / 60)).replace(/\d+/g, addLeadingZero);
        const sec = String(seconds % 60).replace(/\d+/g, addLeadingZero);
        const timeStr = `${min}:${sec}`;
        timer.innerText = timeStr;
        timer.setAttribute("datetime", timeStr);
    }, 1000);
});
