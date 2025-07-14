class GrandParent{
    msg(){
        console.log('Hello from GrandParent class');
    }
}
class Parent extends GrandParent{
    msg(){
        console.log('Hello from Parent class');    
    }
}

class Child extends Parent{
    msg(){
        console.log('Hello from Child class');    
    }
}

const grandparent = new GrandParent();
const parent = new Parent();
const child = new Child();

grandparent.msg();
parent.msg();
child.msg();