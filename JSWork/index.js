// console.log("Welcome to JS");
// const a=12;
// var a=12;
// console.log(a);
// if(a>10){
//     let b=23;
//     a=40;
//     var b=23;
//     console.log("a inside condition:"+a);
// }
// console.log("b outside condition:"+b);

// let a=12;
// let b="12";
// console.log(typeof b);
// let today=Date();
// console.log(today);

// let a=12;
// let b="12";
// if(a===b){
//     console.log("Welcome");
// }
// else{
//     console.log("Hello");
// }
// let myname="Amit";
// let college="ABES EC";
// let result=`Hi, my name is ${myname} and I m doing engineering from ${college} `;
// console.log(result);

// //Object in JS
// // let key="sname"
// const students=[{
//     sname:"Amit",
//     course:"B.tech",
//     college:"ABES EC"
// },
// {
//     sname:"Ram",
//     course:"MCA",
//     college:"ABES EC" 
// }


// ]
// console.log(students);
// console.log(students[1])
// console.log(students[1].sname);
// console.log(students[1].college);
// console.log("Name:"+students.sname+" Course:"+students.course);
// const {sname}=students;
// console.log(sname);
// students[key]="Rahul";
// console.log(students);

// function
// function greeting(msg="Welcome"){
//     console.log("Good Morning "+msg);
// }
// // greeting();
// greeting("Greetings");

// function sum(a,b,c=23){
//     return a+b+c;
// }
// let data=sum(12,20);
// console.log(data);

//Callback
// function cCompiler(){
// return "cCompiler Selected";
// }

// function javaCompiler(){
// return "java Compiler Selected";
// }
// function selectLanguage(clbk){
// console.log("you have :"+clbk());
// }
// // selectLanguage(javaCompiler);
// selectLanguage(cCompiler);

// function selectLanguage(language){
//     let data;
//     if(language=="c"){
//         function cCompiler(){
//             return "cCompiler Selected";
//         }
//         data=cCompiler();
//     }
//     if(language=="java"){
//         function javaCompiler(){
//             return "java Compiler Selected";
//         }
//         data=javaCompiler();
//     }
//     return data;
// }
// let result=selectLanguage("c");
// console.log(result);

console.log("Hello World");
let parent=document.getElementsByClassName("parent");
console.log(parent);
// parent[0].innerText="Data has changed";
parent[0].innerHTML="<h2 style=color:red>Data has changed</h2>";
