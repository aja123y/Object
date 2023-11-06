
// create a single object using an object literal.

// let parson = {
//     FirstName : "Ajay",
//     LastName : "Dhiman",
//     age : "40",
// }
// console.log(parson.FirstName + " " + parson.LastName + " " + parson.age);
// let person = {};
// person.firstName = "Ajay";
// person.lastName="Dhiman";
// person.age = "20";
// console.log(person.firstName + " " + person.lastName + " " + person.age);
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
// for(let x in person)
// {
//     text = +person[x];
// }
// console.log(text);



// by new keyword 

// let person = new Object();
// person.firstName = "Ajay";
// person.lastName = "Dhiman";
// person.age = "30";
// console.log(person.firstName + " " + person.lastName + " " + person.age);
// let x = person;
// x.age = 29;
// console.log(person.firstName + " " + person.lastName + " " + person.age);



// by constructor... 

// function printFullName(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }
// p = new printFullName("Ajay","Dhiman",23);
// console.log(p.firstName +" "+p.lastName+ " " + p.age);






// Q1. Create a Function 
// First method 
// const myname = {
//     Fname : "Ajay",
//     setter : function(){
//         return (`My Name is ${this.Fname}`)
//     }
// }
// console.log(myname.setter());

// Second method 

// const myname = {
//     name : "Ajay",
//     get nam() {
//         return this.name;
//     }
// }
// console.log(myname.nam);
 
// Third method 

// function printname(name){
//     this.name = name;
// }
// const p = new printname(console.log("Ajay"));



// Q2. Delete a Parameter 

// First method 

// const student = {
//     fname : "Ajay",
//     lname : "Dhiman",
//     age : 23,
//     rollno  : "pata ni",
//     get print() {
//         return `${this.fname} ${this.lname} ${this.age} ${this.rollno}`;
//     }
// }
// console.log(student.print);
// delete student.rollno;
// console.log(student.print);


// Q3. Check whether the Package is Dream Package or not 

// const PrintDream = {
//     salary : "",
//     set sale(sale){
//         this.salary = sale;
//     },
//     get sal() {
//         if(this.salary >= 5)
//         {
//             return `Dream`;
//         }
//         else
//         {
//             return `NotDream`;
//         }
//     }
// }
// PrintDream.sale = 9;
// console.log(PrintDream.sal)


// Q4. Check whether the Object has a parameter or not 

// const obj = {
   
//   Check:function(){
//     let count=0
//     for(let x in obj)
//     {
//         count++;
//     }
//     if(count==1)
//     {
//         console.log("False");
//     }
//     else 
//     {
//         console.log("True");
//     }
//   }
// }
// obj.Check();


// Q5. Merge the Object

// const obj1 = {
//     fname : "Ajay",
// }
// const obj2 = {
//     lname : "Dhiman",
// }

// const obj3 = obj1.fname + " " + obj2.lname;
// console.log(obj3);

// const obj3 = {
//     single   : function(){
//         console.log(obj1.fname + " " + obj2.lname);
//     }
// }
// obj3.single();


// Q6. Object Multiplyer 

// const Multiplyer={
//     N : "",
//     Id : 12,
//     HouseNO : 124,
//     set n(n){
//         this.N = n;
//     },
//     get n(){
//         return `${this.Id*this.N} \n${this.HouseNO*this.N}`;
//     }
// }
// Multiplyer.N = 2;
// console.log(Multiplyer.n);


// Q7. Find the sum of Object Members 
// const obj = {
//     p1 : 5,
//     p2 : 4,
//     p3 : 5,
//     get sum() {
//         return `Sum of values = ${this.p1+this.p2+this.p3}`;
//     }
// }
// console.log(obj.sum);

// Q8. Check whether the Objects are same or not. 

// const check = {
//     Name : "Ajay",
//     Id : 3,
//     get che(){
//         if(this.Name.toUpperCase==this.New_Name.toUpperCase && this.Id==this.New_Id)
//         {
//             return `True`;
//         }
//         else 
//         {
//             return `False`;
//         }
//     }
// }
// check.New_Name = "Ajay";
// check.New_Id = 3;
// console.log(check.che);
