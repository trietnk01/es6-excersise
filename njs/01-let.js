//========VAR==========
/*var score = 100;
if(score > 50){
    var msg="WIN";
    console.log(msg);
}
console.log(score);
console.log(msg);*/
//=========LET===========
/*let score = 100;
let msg="";
if(score > 50){
    let msg="WIN";
    console.log(msg);
}
console.log(score);
console.log(msg);*/

/*function drawShape(){
    var mContent= document.getElementById("mContent");
    for(let i=1 ; i<=18;i++){
        var elmP=document.createElement("p");
        elmP.innerHTML=i;
        elmP.onclick=function(){
            alert("Selected: #" + i);
        }
        mContent.appendChild(elmP);
    }
}
function clearShape(){
    var mContent= document.getElementById("mContent");
    mContent.innerHTML="";
}*/
/*const COURSE_NAME="TypeScript";
console.log(COURSE_NAME);*/

let elm=document.getElementById("mContent");
elm.style.color="red";
/*let name ="TypeScript 123";
let price = 5;
elm.innerHTML='<p>Course name : '+name+' , price: '+price+' USD</p>';
elm.innerHTML=`<p>Course name : ${name} , price: ${price} USD</p>`;*/
/*let todo={
    id:169,
    name:"Play football",
    status:false
}
elm.innerHTML=`<div id=todo-id-${todo.id}>
<i class="${todo.status == true ? "hidden" : ""} glyphicon glyphicon-ok"></i>
<span class="name">${todo.name}</span>
</div>`;*/

/*let todoArr=[
    "PlayFootball",
    "Coding",
    "Study TypeScript"
];
console.log(todoArr);
let length=todoArr.length
for(let i=0;i<length;i++){
    console.log(todoArr[i]);
}
for(let index in todoArr){
    console.log(index + ": " + todoArr[index]);
}
for(let todo of todoArr){
    console.log(todo);
}*/
/*let todoObj={
    id:169,
    name:"Play football",
    status:false
}
for(let index in todoObj){
    console.log(index + ":"+todoObj[index]);
}
for(let pro in todoObj){
    console.log(pro);
}*/
/*let courseWeb=["PHP","Zend","Wordpress"];
let courseMobile=["Android","IOS"];
let course = ["HTML","jQuery",...courseWeb,"WindowPhone",...courseMobile];
console.log(course);*/
//let arr=[133,"ES6",false];
/*let id=arr[0];
let name=arr[1];
let free=arr[2];*/
/*let [id,name,free]=arr;
console.log(id + " - " + name + " - " + free);*/
let objCourse={
    id:456,
    name:"ES6",
    free:false
}
let {name,id,free , createdBy="admin"}=objCourse;
//console.log(id+"-"+name+"-"+free + "createdby:" + createdBy);
/*function showInfo(name,price){
    return `Course name : <b>${name}</b> , Price : <b>${price}</b>` ;
}
var dom=document.getElementById("mContent");
dom.style.color="red";
dom.innerHTML=showInfo("ES6",5);*/
/*function calculate(action,...values){
    let result =0;
    console.log(values);
    switch(action){
        case '+':
            for(let value of values){
                result+=value;
            }
            break;
        case '-':
            for(let value of values){
                result-=value;
            }            
            break;
    }   
    return result; 
}
console.log(calculate("+",2,3));*/
function func01(name,age){
    return `Function 01 : My name is ${name},${age}`;
}
var func02=function(name,age){
    return `Function 02 :My name is ${name},${age}`;
}
var func03=(name,age)=>{
    return `Function 03 :My name is ${name},${age}`;
}
var func04=(name,age)=>`Function 04 :My name is ${name},${age}`
    
var func05=name=>{
        return `Function 05 :My name is ${name}`;
}
var func06=()=>{
    return `Function 06 :My name is `;
}
//console.log(func06("john",69));
let courses = ["Android","java","php","angular"];
/*console.log(
    courses.map((coure,index)=>{
        return coure.toUpperCase();
    })
);*/
/*let scores=[2,1,8,9,3,4];
scores.sort(
    (x,y)=>x > y ? true :false
);
console.log(scores);*/
/*let student ={
    name:"Peter",
    courses:["Android","PHP","Java"],
    showInfo:function(){
        var _this=this;
        this.courses.forEach(function(course){
            console.log(`${_this.name} study ${course}`);
        })
    }
}*/
/*let student ={
    name:"Peter",
    courses:["Android","PHP","Java"],
    showInfo:function(){        
        this.courses.forEach(function(course){
            console.log(`${this.name} study ${course}`);
        }.bind(this))
    }
}*/
/*let student ={
    name:"Peter",
    courses:["Android","PHP","Java"],
    showInfo:function(){        
        this.courses.forEach((course)=>{
            console.log(`${this.name} study ${course}`);
        })
    }
}
student.showInfo();*/
/*function getCourse(name,price,free){
    return {
        name,
        price,
        free
    }
}
console.log(getCourse("ES6",20,false));*/
/*function getCourse(name,price,free){
    return {
        name,
        price,
        free,
        showInfo1:function(){
            console.log(`${name + price +free}`);
        },
        showInfo2:function(){
            console.log(`${name + price +free}`);
        },
        showInfo3(delimiter){
            console.log(`${name + price +free + delimiter}`);
        }
    }
}*/
//var myCourse=getCourse("ES6",20,false);
//myCourse.showInfo3("dsfdsfds");
//console.log(myCourse);
/*let proPrefix="support_";
let bootstrapSupport={
    [proPrefix+"chrome"]:true,
    [proPrefix+"ie"]:true,
    [proPrefix+"firefox"]:false
}
console.log(bootstrapSupport);*/

/*class Student{
    constructor(code,name,age){
        this.code=code;
        this.name=name;
        this.age=age;
    }
    showInfo(){
        return this.code +"-"+this.name+"-"+this.age;
    }
    getAge(){
        let today=new Date();
        let year = today.getFullYear();
        return year - this.age;
    }
}
let studentObj=new Student("SV001","nguyenkimdien",42);
console.log(studentObj);
console.log(this);*/
class Person{
    constructor(code,name,age){
        this.code=code;
        this.name=name;
        this.age=age;
    }
    showInfo(){
        console.log(this.code +"-"+this.name+"-"+this.age);
    }
    getAge(){
        let today=new Date();
        let year = today.getFullYear();
        return year - this.age;
    }
}
class Student extends Person{
    constructor(name,code,age,score){
        super(name,code,age);
        this.score=score;
    }
    showInfo(){
        super.showInfo();
        console.log("-"+this.score);
    }
}
let studentObj=new Student("Peter","123",1998,80);
studentObj.showInfo();
