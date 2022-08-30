setInterval(displayTime, 1000)
displayTime()
getName()

//Display current time and current day
function displayTime() {
    let current = new Date();
    let weekDays = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    let time = document.getElementById('time')
    let date = document.getElementById('date')

    time.innerHTML = addZero(current.getHours()) + ':' + addZero(current.getMinutes()) + ':' + addZero(current.getSeconds())
    date.innerHTML = weekDays[current.getDay()];
}

//Add a zero in front of the number, if the number is smaller than 10
function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

//Get the name of the user using prompt
function getName() {
    let name = prompt("Enter your name: ")

    if(name != null) {
        document.getElementById('nameField').innerHTML = name
    }
}