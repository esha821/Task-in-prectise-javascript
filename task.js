// Example 1
// Task 1
let number = 10;
if (number > 0) {
    console.log("The number is positive.");
}
// Exmple 2
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}
// Example 3
let number3=150;
if (number3 >100) {
    console.log("The number is greater than 100.");
}
// Example 4
let score1=200;
if (score1 >=190) {
    console.log("Congratulation! You have a high score.");
}

// Task 2 If else statment
// Example 1
let number1 = 7;
if (number1 % 4 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
// Example 2
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}
// Example 3
let age2=30;
let citizenship= true;
if (age2 >20 && citizenship) {
    console.log("You are eligible for vote.");
} else {
    console.log("You are not eligible for vote.");
}
// Example 4
let number2=25;
if (number2 >10 && number2 <30) {
    console.log("The number is range.");
} else {
    console.log("The number is not range.");
}
// Example 5
let number4=-5;
if (number4 >0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}
// Example 6
let points =500;
if (points >=600) {
    console.log("You get Gold Membership.");
} else {
    console.log("You get not found Golg Membership.");
}
// Example 7
let enteredpassword ="esha821";
let storedpassword ="esha8210";
if (enteredpassword === storedpassword) {
    console.log("Access password");
} else {
    console.log("Incorrect password");
}
// Example 8
let age3 =25;
let License =true;
if (age3 >=30 && License) {
    console.log("You can rent a car.");
} else {
    console.log("You cannot rent a car.");
}
// Example 9
let number5 =15;
if (number5 % 3 === 0 || number5 % 5 === 0) {
    console.log("The number is divisable by 3 or 5");
} else {
    console.log("The number is not divisable by 3 or 5");
}
//  Example 10
let name ="John";
let age4 =0;
if (name && age) {
    console.log("Thank you for providing your detail.");
} else {
    console.log("Both name and age are required.");
}
// If-else If statment
// Example 1
let score = 55;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Example 2
let temperature = 30;

if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature > 40) {
    console.log("It's warm outside.");
} else if (temperature > 50) {
    console.log("It's cool outside.");
} else {
    console.log("It's cold outside.");
}
// Example 3
let temperature1 =30;
if (temperature1 >20) {
    console.log("It's hot.");
}else if (temperature1 <25){
    console.log("It's warm.");
} else if (temperature1 >10){
    console.log("It's hot.");
}
 else {
    console.log("It's cold");
}
// Example 4
let score3 =76;
if (score3 >=90) {
    console.log("Excellent");
} else if(score3 >=75){
    console.log("Good job");
} else if(score3 >=50){
    console.log("Good");
} else if(score3 >=35){
    console.log("Need improvment");
}
 else {
    console.log("Failed");
}
// Example 6
let status ="shipped";
if (status === "processing") {
    console.log("Your order is prepared.");
} else if (status === "shipped"){
    console.log("Your order is on the way.");
} else if(status === "delivered"){
    console.log("Your order is delevired.");
}
 else {
    console.log("Invalid stutas.");
}
// Nested If statment
// Example 1
let year = 2024;
if (year % 4 === 0) { 
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("${year} is a leap year.");
        } else {
            console.log("${year} is not a leap year.");
        }
    } else {
        console.log("&{year} is a leap year.");
    }
} 
else {
    console.log("&{year} is not a leap year.");
}
// Example 2
let username ="admin";
let password ="1234";
if (username === "sir") {
    if (password === "12345") {
        console.log("Login successful.");
    } else {
        console.log("Incorrect pasword");
    }
} else {
    console.log("username is not found.");
}
// Example 3
let username1 ="Saman";
let password1 ="esha821";
if (username1 === "admin") {
    if (password1 === "esha821") {
        console.log("Login successful.");
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("Username not found.");
}
// Example 4
let seatAvliable = true;
let payment = false;
if (seatAvliable) {
    if (payment) {
        console.log("Ticked booked successfully.");
    } else {
        console.log("Payment required to book the ticket.");
    }
} else {
    console.log("No seats avaliable.")
}
// Example 5
let Member =true;
let totalPerchase =150;
if (Member) {
    if (totalPerchase >100) {
        console.log("You qualify for a 20% discount.")
    } else {
        console.log("Not qualify a discount.")
    }
} else {
    console.log("Only members are eligable for vote.")
}
//  If-else else-If
// Example 1
let age1 =20;
if ( age1 <13) {
    console.log("child");
} else if(age1 >= 13 && age1 < 15) {
    console.log("Teanager");
} else if(age1 >=20 && age1 < 30) {
    console.log("Adult");
}
 else {
    console.log("Senior");
}
// Example 2
let perchaseAmount= 600;
if (perchaseAmount >1000) {
    console.log("You get 50% discount.");
} else if(perchaseAmount >500){
    console.log("you get 25% discount.");
} else if(perchaseAmount >100){
    console.log("you get 10% discount.");
} else{
    console.log("No discount available.");
}
// Example 3
let number6 =-10;
if (number6 > 0) {
    console.log("Positive number.")
} else if(number6 < 0){
    console.log("Negative number.")
}
 else {
    console.log("Zero")
}


