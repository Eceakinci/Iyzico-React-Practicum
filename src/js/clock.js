setInterval(displayTime, 1000)
displayTime()
getName()

function displayTime() {
    let current = new Date();
    let weekDays = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    let time = document.getElementById('time')
    let date = document.getElementById('date')

    time.innerHTML = addZero(current.getHours()) + ':' + addZero(current.getMinutes()) + ':' + addZero(current.getSeconds())
    date.innerHTML = weekDays[current.getDay()];
}

function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

function getName() {
    let name = prompt("Enter your name: ")

    if(name != null) {
        document.getElementById('nameField').innerHTML = name
    }
}