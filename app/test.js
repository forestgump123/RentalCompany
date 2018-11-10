var User = require('./Classes/User/User.js');
var UserService = require('./Classes/User/UserService.js');
let name;
const fs = require('fs');
//console.log(name);
name = 'dsad';


let student1 = {
    name: 'kuba',
    surname: 'porada',
    subjects: [
        "Maths",
        "German",
        "IT"


    ],
    age: 12
};
let student = {
    name: 'kuba',
    surname: 'porada',
    subjects: [
        "Maths",
        "German",
        "IT"


    ],
    age: 2
};

console.log(student.name);
console.log(student.subjects[1]);

function fun(param) {
    return param.age;
}

//type+value
console.log(1===1); //gives true

console.log("1"===1); //gives false

//type or value

console.log('1'==1); //gives true
console.log('2'==1); //gives false

function getUser(name,surname,age){

    return {

       name:name,
        surname:surname,
        age:age

    };

}

//constuctor function
function User(name,surname){

    this.name=name;
    this.surname=surname;
}


let user=new User('kuba','laskowski');

let user1=Object.assign({},user); //clone objects
let user2={...user1};  //the same like above

//console.log((user1==user));

let test=new User(JSON.parse('{\n' +
    '"userId": 1,\n' +
    '"name": {"firstName": "jan", "lastName": "nowicki"},\n' +
    '"phoneNumber": "603275928",\n' +
    '"creditCardNumber": "4556240939771350",\n' +
    '"userIdentityId": "DBC 435344"\n' +
    '\n' +
    '}'));


let student123 = JSON.parse(rawdata);
console.log(student123["users"][0]);