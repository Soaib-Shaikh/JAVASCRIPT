class Employee{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    getData(){
        console.log(`Emp ID: ${this.id}`);
        console.log(`Emp Name: ${this.name}`);    
    }
}

class Divison extends Employee{
    constructor(id,name,department,salary){
        super(id,name);
        this.department = department;
        this.salary = salary;
    }

    getDetail(){
        super.getData();
        console.log(`Department: ${this.department}`);
        console.log(`Salary: ${this.salary}`);
        console.log("");
            
    }
}

const emps = [new Divison('1','Soaib','HR','50000'),
            new Divison('2','Sam','Manager','70000'),
            new Divison('3','Neel','IT','100000'),
            new Divison('4','Daksh','Marketing','450000'),
]

emps.forEach(emp=>emp.getDetail());