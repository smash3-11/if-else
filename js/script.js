// Задание1

let number = prompt('Введите число')

if (number %2==0) {
    alert('Число четное')
}else{
    alert('Число нечетное')
}

// Задание2

let name1 = prompt('Как звать?').trim().toString()
let age = prompt('Сколько лет?')

if (name1.length %2==0 && age >=18) {
    alert('Welcome bro')
    
}else {
    alert('Go out pls!')
}

// Задание3

let name = prompt('What`s ur name?').toLowerCase()

if (name.slice(0,1) ==='a') {
    alert('Теперь ты Alisher')
}else{
    alert('Нам нужен Alex')
}
