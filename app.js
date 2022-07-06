'use strict';

const allEmployee = [];

function Employee(employeeId, fullName, department, level,  salary){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    // this.image = image;
    this.salary = salary;
    allEmployee.push(this);
}

const emp1 = new Employee(1000,"Ghazi Samer","Administration","Senior",calculatingTheSalary(1500, 2000));
const emp2 = new Employee(1001,"Lana Ali","Finance","Senior",calculatingTheSalary(1500, 2000));
const emp3 = new Employee(1002,"Tamara Ayoub","Marketing", "Senior",calculatingTheSalary(1500, 2000));
const emp4 = new Employee(1003,"Safi Walid","Administration", "Mid-Senior",calculatingTheSalary(1000, 1500));
const emp5 = new Employee(1004,"Omar Zaid","Development", "Senior",calculatingTheSalary(1500, 2000));
const emp6 = new Employee(1005,"Rana Saleh","Development", "Junior",calculatingTheSalary(500, 1000));
const emp7 = new Employee(1006,"Hadi Ahmad","Finance", "Mid-Senior",calculatingTheSalary(1000, 1500));

Employee.prototype.printEmpInfo = function () {
    document.write('<p>${this.fullName} : ${this.salary} JD\n<p>');
}

for (let i=0 ; i<allEmployee.length; i++){
    allEmployee[i].printEmpInfo();
}

function calculatingTheSalary(min, max) {
    const randomSalary = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomSalary * 0.075;
    // return  (Math.floor(Math.random() * (max - min + 1) ) + min);
}

