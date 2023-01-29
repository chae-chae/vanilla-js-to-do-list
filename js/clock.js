const clock = document.querySelector("h2.clock");

function getTime() {
    const date = new Date();
    const TIME_STRING = `${date.getHours().toString().padStart(2, "0")} : ${date
        .getMinutes()
        .toString()
        .padStart(2, "0")} : ${date.getSeconds().toString().padStart(2, "0")}`;
    // console.log(TIME_STRING);
    clock.innerText = TIME_STRING;
}

setInterval(getTime, 1000);
