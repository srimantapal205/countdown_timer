const newYears = "1 Jan 2023"

const daysElmnt = document.getElementById("days")
const hoursElmnt = document.getElementById("hours")
const mintElmnt = document.getElementById("mins")
const secElmnt = document.getElementById("second")


function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    console.log(totalSeconds)

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minuits = Math.floor(totalSeconds / 60) % 60
    const second = Math.floor(totalSeconds) % 60
    console.log(days, hours, minuits, second)
    daysElmnt.innerHTML = days
    hoursElmnt.innerHTML = formatTime(hours)
    mintElmnt.innerHTML = formatTime(minuits)
    secElmnt.innerHTML = formatTime(second)


}
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}
//initial call
countDown()
setInterval(countDown, 1000);
// function getSecond(){
//     const mlsc = this.countDown();
//     const seconds = (mlsc/1000)%60;
//     console.log(seconds)
// }
// getSecond()
// setInterval(getSecond, 1000 );