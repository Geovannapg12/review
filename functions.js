// // const greeting = () => {
// //     return "Hello there LEARN student!"
// //   }

// // const greeting = () => {
// //     return "Hello there LEARN student!"
// //   }

// //  console.log(greeting())


//  Write a function named marco that returns "polo".

 const marco = () => {
   return "polo"
 }

console.log(marco())


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) => {
     return `Welcome, ${name}`
}
 console.log(greeting("Leia"))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) => {
     if(number % 2 === 0) {
     return "even" 
} else {
    return "odd"
    }
}
console.log(oddOrEven(6))



// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (number) => {
    return `${number}` * 3
}

console.log(triple(4))


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
 
const multiply = (num1, num2) => {
    return `${num1}` * `${num2}`
}

console.log(multiply(12,15))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num3, num4) => {
    if ( num3%num4 === 0 ) {
        return `${num3} is evenly divisible by ${num4}`
    } else {
        return `${num3} is not evenly divisible by ${num4}`
    }
}

console.log(divisibleBy(26,57))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (number) => {
    if (number >= 90){
        return "A"
    } else if (number >= 80){
        return "B"
    } else if (number >= 70){
        return("C")
    } else if (number >=60){
        return("D")
    } else if (number >=50){
        return ("F")
    }
}
console.log(assignGrade(85))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1, string2) => {
    if (string1.length > string2.length){
        return string1
    } else {
        return string2
    }
}

console.log(isLonger("salad", "coffee"))




 

