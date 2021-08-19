let age = prompt("How old are you?")

age = parseInt(age)
isNaN(age)

while (isNaN(age)) {
    age = prompt("How old are you?")
    age = parseInt(age)
}

console.log(typeof age)
console.log(age)