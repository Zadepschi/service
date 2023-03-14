const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })

    }
})

function saleCountdown() {
    const saleDate = new Date("July 3, 2023 00:00");
    const now  = new Date();
    const diff = saleDate - now;
    


const  msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInHour = 60 * 60 * 1000;
const msInDay = 24 *60 * 60 * 1000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".days").textContent = displayDay;

const displayHour = Math.floor((diff%msInDay)/msInHour);
document.querySelector(".hours").textContent = displayHour;

const displayMinute = Math.floor((diff%msInHour) / msInMinute);
document.querySelector(".minutes").textContent = displayMinute;

const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
document.querySelector(".seconds").textContent = displaySecond;

if (diff <= 0 ) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    saleFinished();

}
}

let timerID = setInterval(saleCountdown, 1000);

function saleFinished() {
    const heading = document.querySelector("h2");
    heading.textContent = "Finished!";
    heading.classList.add("red");
}