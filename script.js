// Write a program that asks the user for their age using prompt(). If the age is 18 or above, display "You are an adult" using alert(), otherwise display "You are a minor".

// let age = Number(prompt("Enter age bro : "));

// if(age>=18){
//     alert("You are an adult");
// }
// else{
//     alert("You are a minor");
// }




// Ask the user for a number using prompt(), then use an if-else statement to check if it's even or odd. Show the result using alert().

// let num = Number(prompt("Enter no pls ✍️"));

// if(num%2 === 0 ){
//     alert("you have entered even no bro 🥰")
// }
// else{
//     alert("odd no 😔");
// }



// Take a student's marks as input using prompt(), then use if-else to assign grades:
// 90+ → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// Below 60 → F
// Display the grade using alert().
// let marks;
// function abcd(){
//     marks = Number(prompt("Enter your marks bro I will analyze your perfomance 😁"));
//     console.log(marks)
// }

// abcd();
// let grades;

// if(isNaN(marks)){
//     while(isNaN(marks)){
//         alert("Bro maine no poocha tha tune kya diya 😔 very bad");
//         abcd();

//     }
// }
// else{
//     if(marks>=90){
//         grades = 'A';
//     }
//     else if(marks>=80){
//         grades = 'B';
//     }
//     else if(marks>=70){
//         grades = 'C';
//     }
//     else if(marks>=60){
//         grades = 'D';
//     }
//     else{
//         grades = 'F';
//     }
// }

// alert("Bro your grades is "+grades + " 😊");




// Ask the user to enter a username and password using prompt(). If both match "admin" and "1234", show "Login successful" using alert(), otherwise "Invalid credentials".

// let username = prompt("Enter username");
// if(username == "admin"){
//     let pass = prompt("Enter password :- ");
//     if(pass == "1234"){
//         alert("Login Successfull");
//     }
//     else{
//         alert("Pass is wrong let try once again");
//         let pass1 = prompt("Enter password :- ");
//         if(pass1 == "1234"){
//             alert("Login Successfull");
//         }
//         else{
//             alert("Kya gunda banega re tu 😃");
//         }
//     }
// }
// else{
//     alert("chal chutiye pahli phursat me nikal");
// }








// Take two numbers and an operator (+, -, *, /) as input from the user using prompt(), then use if-else or switch to perform the operation and display the result using alert().


// let num1 = Number(prompt("ENTER FIRST NO"));
// let num2 = Number(prompt("ENTER second NO"));
// let op = prompt("Enter operator +,-,/,*");
// let res;


// if(op =='+'){
//     res = num1+num2;
// }
// else if(op === "-"){
//     res = num1-num2;
// }
// else if(op === "*"){
//     res = num1*num2;
// }
// else if(op=== "/"){
//     res = num1/num2;
// }
// else{
//     alert("wrong operator");
// }

// alert(res);

// Ask the user for a year using prompt(). Use if-else to check if it's a leap year (divisible by 4 but not 100, or divisible by 400) and display the result using alert().


// let yr = Number(prompt("Enter a year I will tell you this is leap year or not 😃"));

// if(yr%4===0 && yr%100 !== 0 ){
//     alert(`${yr} its a leap year bro`)
// }
// else if(yr%400 == 0){
//     alert(`${yr} is a leap year bro`);
// }
// else{
//     alert("Not a leap year");
// }




// Take a single letter input from the user using prompt(). Use if-else to check if it's a vowel (a, e, i, o, u) or consonant and show the result using alert().

// let letter = (prompt("Enter single letter pls I will check whether its vowel or consonant 😃")).toLowerCase();

// if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
//     alert(`${letter} its a vowel letter bro`);
// }
// else{
//     alert("consonants😔");
// }

// Ask the user for a purchase amount using prompt(). If the amount is above 5000, give a 10% discount and show the final price using alert(), otherwise show the original price.


// let purchaseAmt = Number(prompt("Enter purchase amount"));
// let price = purchaseAmt;
// if(purchaseAmt >= 5000){
//     price = purchaseAmt - (purchaseAmt*(0.1));
//     alert("Yay bro you got discount of 10%🥰 and your final price is "+price);
// }
// else{
//     let x = 5000-purchaseAmt;
//     let x2 = confirm(`you miss 10% discount of just more ${x} rupees if you want to add then click ok otherwise cancel`);
//     if(x2== true){
//         let num2 = Number(prompt("Enter next purchase amt"));
//         if((purchaseAmt + num2 )>= 5000){

//             alert("yay bro you got discount of 10% and final price is" + ((purchaseAmt + num2)- (purchaseAmt + num2)*(0.1)));
//         }
//         else{
//             alert("your cart value is " + purchaseAmt);
//         }
        
//     }
// }



// Take two numbers as input using prompt() and use if-else to find and display the largest number using alert().

// let num1 = Number(prompt("Enter first No"));
// let num2 = Number(prompt("Enter second no"));

// if(num1 > num2){
//     alert(num1 + " is the largest no ");
// }
// else if(num1 === num2){
//     alert("Equal 🥰");
// }
// else{
//     alert(num2 + " is the largest no  among them ");
// }


// Ask the user to enter a color (red, yellow, or green) using prompt(). Use if-else to display the corresponding action:


// function to_lower(letter){
//     let x = letter;

//     x.forEach(element => {
//         let num = Number(element);
//     });
// }

// let color = prompt(`Enter color
//     option red,green,yellow`).toLowerCase();



// if(color == "red"){
//     alert("stop⛔");
// }
// else if(color == "yellow"){
//     alert("slow down🐢");
// }
// else if(color =="green"){
//     alert("GO");
// }

// "Stop" for red
// "Slow down" for yellow
// "Go" for green`