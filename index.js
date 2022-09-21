/*
    1. Declare 3 variables without initialization called username,password and role.
*/
let username;
let password;
let role;
/*
    
    2. Create a login function which is able to prompt the user to provide their username, password and role.
        -use prompt() and update the username,password and role global variable with the prompt() returned values.
        -add an if statement to check if the the username is an empty string or null or if the password is an empty string or null or if the role is an empty string or null.
            -if it is, show an alert to inform the user that their input should not be empty.
        -add an else statement. Inside the else statement add a switch to check the user's role add 3 cases and a default:
                -if the user's role is admin, show an alert with the following message:
                    "Welcome back to the class portal, admin!"
                -if the user's role is teacher, show an alert with the following message:
                    "Thank you for logging in, teacher!"
                -if the user's role is a rookie, show an alert with the following message:
                    "Welcome to the class portal, student!"
                -if the user's role does not fall under any of the cases, as a default, show a message:
                    "Role out of range."
*/
function loginFunction() {
    username = prompt("Please enter your Username:");
    password = prompt("Please enter your Password:");
    role = prompt("Please enter your Role:")
    if (!username || !password || !role) {
        alert("Please make sure that your input is valid and not empty!")
    } else {
        switch (role.toLocaleLowerCase()) {
            case "admin":
                alert("Welcome back to the class protal, admin!");
                break;
            case "teacher":
                alert("Thank you for logging in, teacher!");
                break;
            case "student":
                alert("Welcome to the class portal, student!");
                break;
            default:
                alert("Role out of range.")
                break;
        }
    }
}
loginFunction();


/*
    3. Create a function which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        -add parameters appropriate to describe the arguments.
        -create a new function scoped variable called average.
        -calculate the average of the 4 number inputs and store it in the variable average.
        -research the use of Math.round() and round off the value of the average variable.
            -update the average variable with the use of Math.round()
            -console.log() the average variable to check if it is rounding off first.
        -add an if statement to check if the value of average is less than or equal to 74.
            -if it is, show the following message in a console.log():
            "Hello, student, your average is <show average>. The letter equivalent is F"
        -add an else if statement to check if the value of average is greater than or equal to 75 and if average is less than or equal to 79.
            -if it is, show the following message in a console.log():
            "Hello, student, your average is <show average>. The letter equivalent is D"
        -add an else if statement to check if the value of average is greater than or equal to 80 and if average is less than or equal to 84.
            -if it is, show the following message in a console.log():
            "Hello, student, your average is <show average>. The letter equivalent is C"
        -add an else if statement to check if the value of average is greater than or equal to 85 and if average is less than or equal to 89.
            -if it is, show the following message in a console.log():
            "Hello, student, your average is <show average>. The letter equivalent is B"
        -add an else if statement to check if the value of average is greater than or equal to 90 and if average is less than or equal to 95.
            -if it is, show the following message in a console.log():
            "Hello, student, your average is <show average>. The letter equivalent is A"
        -add an else if statement to check if the value of average is greater than 96.
            -if it is, show the following message in a console.log():
            "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.

        Stretch goal:
            -Add an if statement to check the role of the user.
                -if the role of the user is currently "teacher" or "admin" or undefined or null, show an alert:
                "<role>! You are not allowed to access this feature!".
                -else, continue to evaluate the letter equivalent of the student's average.

*/

function getAverage(num1, num2, num3, num4) {
    if (role === "student") {
        let average = Math.round(((num1 + num2 + num3 + num4) / 4));
        if (average <= 74) {
            console.log(`Hello, student, your avearge is ${average}. The letter equivalent is F`)
        } else if (average >= 75 && average <= 79) {
            console.log(`Hello, student, your average is ${average}. The letter equivalent is D`)
        } else if (average >= 80 && average <= 84) {
            console.log(`Hello,student, your average is ${average}. The Letter equivalent is C`)
        } else if (average >= 85 && average <= 89) {
            console.log(`Hello, student, your average is ${average}. The letter equivalent is B`)
        } else if (average >= 90 && average <= 95) {
            console.log(`Hello, student, your average is ${average}. The letter equivalent is A`)
        } else if (average >= 96) {
            console.log(`Hello, student, your average is ${average}. The letter equivalent is A+`)
        }

    } else {
        alert(`${role}! You are not allowed to access this feature!`)
    }
}



