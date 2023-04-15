// Timer

function timer() {
    let minute = document.querySelector('.minute').innerHTML
    let second = document.querySelector('.second').innerHTML
    let end = false

    if (second > 0) second --
    else {
        second = 59

        if (minute > 0) minute--
        else {
            second = 59
            end = true
        }
    }

    if (end) {
        clearInterval(intervalID)
        alert("ВРЕМЯ ВЫШЛО!")
    } else {
        document.querySelector('.minute').innerHTML = minute
        document.querySelector('.second').innerHTML = second
    }
}
window.intervalID = setInterval(timer, 1000)
window.onload = timer

