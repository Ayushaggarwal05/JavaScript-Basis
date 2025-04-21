function sayHello(){alert("Hello world")}

document.write('<h1>This is my first JavaScript page</h1>');

var pi=3.14;
var person="are u good";
var answer = "yes I am!";
document.write(pi + "<br>");
document.write(person + "<br>");
document.write(answer + "<br>");

// function myfunction(){
//     var carname="welcome";
//     document.getElementById("demo").innerHTML = carname;
// }

// var num=10;
// console.log(num);
// console.log(typeof(num));
// var num=false;
// console.log(num);
// console.log(typeof(num));
// var num="Sanjeev soni";
// console.log(num);
// console.log(typeof(num));
// var num=null;
// console.log(num);
// console.log(typeof(num));
// var num=undefined; 
// console.log(num);
// console.log(typeof(num));





var person = {
    firstName:"John",
    lastName:"doe",
    id:556,
    getinfo:function(){
        return this.firstName + " " + this.lastName;
    }
};


document.getElementById("demo").innerHTML=person.getinfo();

var person1={
    name:"Ramesh",
    age:45,
    ismarried:true,
    address:{
        street:"vijay nagar",
        flat:4
    }
}

var person2= new Object();
person2.name="krish";
person2.age=64;
person2.ismarried=true;
person2.address={};
person2.address.street="Vijay road";
person2['address']['flat']=5;
console.log(person2);

// function myfunction(){
//     var carname="volve";
//     document.getElementById("demo").innerHTML=typeof carname+" "+carname;
// }
// myfunction();
// document.getElementById("demo2").innerHTML=typeof carname;

// var local={
//     europe:function(){
//         var myfriend="haaaummm";

//         var france=function(){
//             var france=function(){

//             };
//             paris();
//         };
//         france();
//     }
// };

// function show(){
//     //local outer variable
//     var a="a is local outer varible";
//     document.write(a+"<br>");
//     console.log(a);

//     function disk(){
//         var b="b is local outer variable";
//         document.write(b+"<br>");
//         console.log(b);
//     }
//     disk();
// }
// show();
// // console.log(show());

// var name ="John";
// function first(){
//     var a="hello";
//     second();
//     var x = a + `$("name")`;
//     console.log(x);

// }
// function second(){
//     var b="Hi!!";
//     third();
//     var z= b + name;
//     console.log(z);

// }
// function third(){
//     var c = "Hey!!";
//     var y= c + name;
//     console.log(y);
// }
// first();

var age = 20;
if(age>18){
    document.write(" <b>You are eligible to vote</b>");

}
else{
    document.write("<b>You are not eligible</b>\n");
}

var grade = "C";
document.write("<br> entering the switch block");
switch(grade){
    case "A":
        console.log("Good job");
        break;
    case "B":
        console.log("preety good");
        break;
    case "C":
        console.log("Passed");
        break;
    case "E":
        console.log("Fail!!!");
        break;
    default :
    console.log("Unknown Grade");

}

var i;
for(i=0;i<3;i=i+1){
    console.log(i);
}


// var count;
// document.write("<br>Starting Loop :--- <br>");
// for(count = 0;count<10;count++){
//     document.write("Current count : " , count);
//     document.write("<br>");
// }
// document.write("Loop stop");


// var i;
// document.write("<br> Printing the even number between 100<br>");

// for(i=0;i<100;i++){
//     if(i%2==0){
//         document.write("This is a even number: \t",i,"<br>");        
//     }
// }

// document.write("<br> Using a Array <br>")
// var myArray=["A","B","C"];
// for(var i =0;i < myArray.length;i++){
//     document.write("The member of myArray is index :"+i+ " is " + myArray[i]);
//     document.write("<br>");
// }

// document.write("<br><br>Now We Are Entering While Loops now");
// var cnt =0;
// while(cnt < 10){
//     document.write("Current count: " + cnt + "<br>")
//     cnt++;
// }

document.write("<br><br>");

function sayhii(){
    alert("HHHHHHeeeeeeellllllllllllllloooooo");
}

function saying(name , age){
    document.write(name + "is " + age);
}

function toggleText() {
    const messageElement = document.getElementById('message');
    if (messageElement.textContent === 'Click a button to perform an action!') {
        messageElement.textContent = 'Text has been toggled!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Click a button to perform an action!';
        messageElement.style.color = 'black';
    }
}


// Dates in JavaScript

const d = new Date("2015-03-25"); // ISO format
// console.log(d.getFullYear());

const dd = new Date("03/25/2015")
// console.log(dd);


let msec = Date.parse("March 21,2012");
const day = new Date("msec");
// console.log(msec);
// console.log(day);


const dayss = ["Sunday", "Monday","Tuesday","wednesday","Thrusday","Friday","Saturday"];
const da = new Date();
let each = dayss[da.getDay(4)];
// console.log(d);

const s = new Date();
// s.setDate(s.getDate() + 50);
s.setSeconds(50);
// console.log(s);



let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100,0,14);

if(someday > today){
    text = "Today is before 14 January 2100";
    // console.log(text);
}
else{
    text = "Today is after 14 January 2100";
    // console.log(text);
}

console.log(Math.floor(-4.2));
console.log(Math.ceil(-4.2));
console.log(Math.trunc(-4.2));
console.log(Math.sign(-4.2));
console.log(Math.pow(8,5));
console.log(Math.sqrt(4));
console.log(Math.abs(-4.5));
console.log(Math.min(0,5,6,3,2,2,4,5,6,6,6,6,-9));
console.log(Math.log10(3574));
console.log(Math.floor(Math.random()*100));       //0-99
console.log(Math.floor(Math.random()*100) + 1);   // 1-99

function getRndIntergers(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

console.log(getRndIntergers(1,100));

// var Element = document.getElementById("divelement");
// Element.innerHTML = "This going to print in my ht,l by using Javascript";


let k = "Visit ABESEC";
let p = k.search("ABESEC");
console.log(p);

