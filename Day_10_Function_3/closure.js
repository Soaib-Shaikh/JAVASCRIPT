function outerFunc(){
    let outervar = "Hello World...";
    function innerFunc(){
        console.log(outervar);
    }
    return innerFunc;
}

let myClosure = outerFunc();
myClosure();