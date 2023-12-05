console.log('HELLO WORLD');

//weird scope-dont use
//var x=5
//regular old variable
let y = 6;
y=10;//you can change the value

const z = 7;//this is a constant. Can't be changed 
//z=10//this throws and error

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z);//this does devision but returne=s the remainder
console.log(y^z);//exponents

let fname="Jashaun ";
let middle="Akanyili Awule Nii Lat3 Kwesi Kwashie "; 
let lname="Akamba";
console.log(fname+middle+lname);
console.log(lname + 6 )

let user="Jashaun";
let PASS="FOO";

user="Jashaun"
if (user=="Jashaun") {
    console.log('you are '+user)
}else{
    console.error("denied");
}


const A = 90;
const B= 80;
const C = 70;
const D = 60;
const F = 50;

let myGrade=15;

function checkGrade(myGrade){
    console.log('running ...'+myAge);
    console.log('running ...' + myGrade);

    if (myGrade < A) {
        message += `<li>You have a A</li>`;
    }
    
    if (myGrade >= B && myGrade< A) {
        message += `<li>You have a B</li>`;
    }
    
    if (myGrade >= C && myGrade < B) {
        message += `<li>You have a C</li>`;
    }
    
    if (myGrade >= D && myGrade < C) {
        message += `<li>You have a D</li>`;
    
        if (myGrade <= F) {
        message += `<li>You have an F</li>`;
    };
 }
}