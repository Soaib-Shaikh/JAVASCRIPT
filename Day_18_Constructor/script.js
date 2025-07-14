class Car{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }

    getCar(){
        console.log(`Car: ${this.name} and Model: ${this.model}`);
        
    }
}

class Details extends Car{
    constructor(name,model){
        super(name,model);
    }

    getDetail(){
        super.getCar()
    }

}

const data = new Details('Swift','VDI');
const data1 = new Details('XUV700','Mahindra');
data.getDetail();
data1.getDetail();