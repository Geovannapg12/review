// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var one = 124
var two = 6
 
console.log(one + two)

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

// Write a statement that takes a var of hungry
 var hungry = true
 

 if (hungry === true) {
    console.log ("eat food")
 } else {
    console.log("keep coding")
 }




// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

//write a statemnt that takes a var of trafficLight 
var trafficLight = "green"

if (trafficLight === "green"){
    console.log("GO")
} else if (trafficLight === "yellow"){
    console.log("slow down")
} else if(trafficLight === "red"){
    console.log("stop")
}




// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// Write a statement that takes two var that are numbers and outputs a larger number 
var one = 25
var two = 15

if (one === two){
    console.log("the numbers are the same")
} else {
    console.log("the numbers are not the same")
}


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// Write a variable that takes a number

var num = 0

if (num % 2 === 0){
    console.log("the number is even")
} else if (num % 2 ==! 0){
    console.log("the number is odd")
} else if (num === 0) {
    console.log("the number is zero")
    }

 

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// write a var that takes a percentage 

var grade = 100

if (grade === 100) {
    console.log ("perfect score")
} else if (grade === 0){
    console.log("no grade available")
} else if (grade >= 85){
    console.log("b")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var once = "hello"
var twice = "43"
var thrice = true
 
console.log(typeof once)


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "123!4567!8"

if (password.length >= 12){
    console.log("This is a mighty password")
} else if (password.length >= 8 || password.includes("!")){
    console.log("this password is strong enough")
} else {
    console.log("this is not a valid password")
}