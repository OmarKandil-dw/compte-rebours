const text = document.querySelector('h2')


function chrono() {
    const now = new Date().getTime();
    const countdowndate = new Date('April 9 ,2024').getTime();

    const countbase = countdowndate - now ;

const days = Math.floor(countbase / (1000 * 60 * 60 * 24));
const hours = Math.floor(countbase % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ));
const minutes = Math.floor(countbase % (1000 * 60 * 60 )/ (1000 * 60));
const seconds = Math.floor(countbase %  (1000 * 60) / 1000);
console.log(days,hours,minutes,seconds );

text.innerText  = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}
chrono();
const countDowninterval = setInterval(() => {
    chrono()
}, 1000);