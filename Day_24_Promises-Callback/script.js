// callback

// function greet(name, callback) {
//     console.log('Hello, ' + name + '!');
//     callback();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('Alice', sayGoodbye); 

// callbackHell

// setTimeout(()=>{
//     console.log("Hello World");
//     setTimeout(()=>{
//         console.log("Hello Devloper");
//         setTimeout(()=>{
//             console.log("Hello FullStack Dev...");
            
//         },1000)
//     },1000)
    
// },2000)

// Promise

const promise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello from Resolve');
        reject('Hello from Reject');
    },1000)
})

promise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.message);  
}).finally(()=>{
    console.log("finally");
    
})

console.log("Hello From Main Function");
