export {}

let message = 'swami-shreeji';
console.log(message);
console.log('auto compile testing');

//Testing variables and their types
let x : number = 10;
let y : boolean = true;
let z : string = 'Test';

//TS infer the type based on value but its good to have explicit type as it help in intellisense
let xx = 10;
console.log(xx.toPrecision);

//Enum is used for enumeration, same as Java
enum COLORS  {'RED', 'GREEN', 'BLUE'};
let e : number = COLORS.BLUE;
console.log('e : ' + e);

//undefined is a type as well as subtype for main types
let m : boolean = undefined;

//tuple is used for storing values of different types but the value and type order must match
let tuple : [string, number] = ['Swami-Shreeji', 10];
console.log('tuple : ' + tuple);

//If you dont know type upfront use Any type
let a : any = 'Str';
a = 10;
a = true;
console.log('any type : ' + a);
a = 20;
console.log(a.name); //Typescript lets you treat any type variable with out much type checking, so you can call properties of it or call its constructor etc.

//Unknown type is same as Any type but does not let you know any method or constructor on the type
let u : unknown = 'Test';

//Functions

//Function parameters with type
function add(x: number, y:number){
    return x + y;
}

console.log(add(5, 6));

//Optional function parameters with type
function addWithOptionalParam(x: number, y?:number){
    if(y){
        return x + y;    
    }

        return x;
}

console.log(addWithOptionalParam(5));

//Function parameters with default value
function addWithDefaultParamValue(x: number, y:number = 10){
        return x + y;
}

console.log(addWithDefaultParamValue(5));

//Interface
interface Person{
    fName : String,
    lName : String
}

function greet(p : Person){
    console.log(`Hello ${p.fName} ${p.lName}!!`);   
}

let p : Person = {fName : 'Sandip', lName: 'Dhummad'};
greet(p);

//Interface with Optional properties
interface Person2{
    fName : String,
    lName? : String
}

function greet2(p : Person2){
    console.log(`Hello ${p.fName} ${p.lName}!!`);   
}

let p2 : Person2 = {fName : 'Sandip'};
greet2(p2);

//Class
class Employee{
    name: String;
    department: String;
    salary: number;

    constructor(name: String){
        this.name = name;
    }

    changeDepartment(newDepartment: String){
        this.department = newDepartment;
    }
}

let emp = new Employee('Sandip Dhummad');
console.log(emp);
emp.changeDepartment('IT');
console.log(emp);

//Class based inheritance
class Manager extends Employee{
    employees = new Array<Employee>();

    constructor(name: String){
        super(name);
    }

    addReprtingEmployee(emp: Employee){
        this.employees[this.employees.length] = emp;
    }
}

let manager = new Manager('John Doe');
console.log(manager);

let emp2 = new Employee('Sam Sykes');
manager.addReprtingEmployee(emp2);
console.log(manager);