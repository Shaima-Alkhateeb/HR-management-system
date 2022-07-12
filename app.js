'use strict';

const allEmployees = [];
const parentEmployee = document.getElementById("displayEmployee");

function Employee(employeeId, fullName, department, level,  image){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    allEmployees.push(this);
}


Employee.prototype.salary = function() {
    (this.level.toLowerCase() === "senior")? this.salary = calculatingTheSalary(1500, 2000):
    (this.level.toLowerCase() === "mid-senior")? this.salary = calculatingTheSalary(1000, 1500):
    this.salary = calculatingTheSalary(500, 1000)
}

function calculatingTheSalary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

Employee.prototype.netSalary = function() {
    this.netSalary = Math.floor(this.salary - (this.salary * 0.075));
}


Employee.prototype.printEmpInfo = function () {
    // 1. create Element
    const pEl = document.createElement("p");
    // 2. add content or attributes 
    pEl.textContent = `Name : ${this.fullName} - ID : ${this.employeeId} - Depratment: ${this.department} -  Level :  ${this.level} - ${this.salary} `;
    // 3. append to the DOM
    parentEmployee.appendChild(pEl);
}


const ghaziSamer = new Employee(1000,"Ghazi Samer","Administration","Senior", "assets/Ghazi.jpg");
const lanaAli = new Employee(1001,"Lana Ali","Finance","Senior","./assets/Lana.jpg");
const tamaraAyoub = new Employee(1002,"Tamara Ayoub","Marketing", "Senior","./assets/Tamara.jpg");
const safiWalid = new Employee(1003,"Safi Walid","Administration", "Mid-Senior","./assets/Safi.jpg");
const omarZaid = new Employee(1004,"Omar Zaid","Development", "Senior","./assets/Omar.jpg");
const ranaSaleh = new Employee(1005,"Rana Saleh","Development", "Junior","./assets/Rana.jpg");
const hadiAhmad = new Employee(1006,"Hadi Ahmad","Finance", "Mid-Senior","./assets/Hadi.jpg");

for (let i=0 ; i<allEmployees.length; i++){
    allEmployees[i].salary();
    allEmployees[i].netSalary();
    allEmployees[i].printEmpInfo();
}

// // img
// // 1. create element
// const imgEl = document.createElement("img");
// // <img src="" alt=""/>
// // 2. add content or attributes
// imgEl.src = "./asserts/Ghazi.jpg";
// imgEl.alt = "ghaziSamer";
// // 3. append it to the DOM tree
// divEls[1].appendChild(imgEl);

const myImages = document.images;
let text = "";
for (let i = 0; i < myImages.length; i++) {
  text +=  myImages[i].src ;
 ;
}

