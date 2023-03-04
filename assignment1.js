const fetch = require('node-fetch')

//Problem #1: What should the following evaluations return?  
2 == '2' // true
'he' == 'she'  //false
2 === 2 //true
'true' == true  //true
true === true  //true
'true' != true // true
'true' !== true  // true
 
/* Problem #2: What are the three different ways you can declare a variable? And what is the differences 
between them?  

let - let is locally scope, allows you to redeclare a variable. 
const - const is locally scope. Variables made with const cannot be redeclared. 
var -  var is the globally scope, allows you to redeclare a variable. 

*/ 


 
//Problem #3: Write a simple function for each type of these functions:  
//- First-Class Function 
const drive = () => {
    console.log(" Zroom Zroom")
}

//- Higher-Order Function 

const  startCar = (startFunction) => {
    startFunction()
}

// - Callback Function 

function stop (){
 console.log("stopping car")
}
 
function stoppingCar (){
    stop()
}
 
//Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below? 
const a = 'hi';  
// console.log(c); undefined 
 
const someFunction = (arg) => { 
    const b = 'bye';  
 
    if (arg) { 
        const c = 'see ya!'; 
        console.log(a);  // hi
        console.log(b);  // bye
    }  
}
 
//Problem #5: Given the following data structure, write a for loop using:  
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//- For statement 
//- For...of  

    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i])
    }

    for (element of  someArray){
        console.log(element)
    }

 /* Problem #6: Given the following data structure (label each one as either Mutative or Non-Mutative):  
 const someArray = [1, 2, 3, 4, 5]; 
  
 - Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5] Non-Mutative
 - Use the length property to return the length of the array Non-Mutative
 - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5] Non-Mutative
 - Use the find() method to find and return the value of 5.  Non-Mutative
 - Use the slice() method to return back this array: [3, 4] Non-Mutative
 - Use the splice() method to return back this array: [1, 2, 5] Mutative
 - Use the includes() method to return back TRUE when I pass in “4” into the includes method. Non-Mutative
 - Use the indexOf() method to return back the index of the element “2”  Non-Mutative
 - Use the isArray() method to return back TRUE when I pass in the array Non-Mutative
 - Use the join() method to return back: “1, 2, 3, 4, 5” Mutative
 - Use the map() method to return back a new array: [2, 4, 6, 8, 10] Non-Mutative
 - Use the pop() method to return back a new array: [1, 2, 3, 4] Mutative
 - Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6] Mutative
 - Use the shift() method to return back a new array: [2, 3, 4, 5] Mutative
  - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5] Mutative
 - Sort this array [9, 1, 3, 5] to return from smallest to largest using the sort() method, should return:     
 [1, 3, 5, 9] Mutative
 - Use the reduce() method to return back the sum of all numbers in the array Mutative
 */ 

// Problem #7: Given the following data structure:  
    const someObject = { 
        color: 'black' 
    } 
//- Use the assign() method to add a new key value pair of:   name: ‘john doe’
    const john = {name:"john doe"}
     const someObject1 = Object.assign( john,someObject)

//- Use the dot notation to add a new key value pair of:    age: 22 
    someObject1.age = 22

//- Use the bracket notation to add a new key value pair of:    address: ‘123 test address’
    someObject1["address"] = "123 test address"

//- Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
    Object.keys(someObject1)
//- Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test 
//address”]
    Object.values(someObject1)
//- Use the for...in loop against this object to console.log each of the keys values.
    for(keys in someObject1){
        console.log(keys)
    }

//Problem #8: Given the following data structure:  
// - Use either the for statement or for...of loop to console.log each of the keys. Values. 
    const numbers = [ 
        { 
            num: 1 
        }, 
        { 
            num: 2 
        }, 
        { 
            num: 3 
        } 
    ] 
    
    for (const{num} of numbers){
        console.log(num)
     }

//Problem #9: Create a new Set() object 
    const newSet = new Set()

//- Add a new value of: ‘john doe’ 
    newSet.add('john doe')

//- Check if the value of ‘john doe’ exists
     newSet.has('john doe')

//- Remove the value of ‘john doe’ 
     newSet.delete('john doe')

// Problem #10: Create a new Map() object 
     const newMap  = new Map()
//- Add a new key-value pair of: name: ‘john doe’ 
     newMap.set('name','john doe')

//- Check if the value ‘john doe’ exists 
     newMap.has('john doe')
//- Remove the key-value pair of ‘john doe’
     newMap.delete('john doe')

/*Problem #11: Explain what asynchronous programming means in 3 sentences.
 Asynchronous programming allows for code to run parallel to each other without delay. Code is usually executed one after the other synchronously; however, some code may take more time to complete. Instead of waiting for that code to complete, asynchronous programming takes that code out of the line and performs it in the background while running the other code in the queue.
 */  

/*Problem #12: Explain what call back hell is.  
 Callback hell is when you have several nested callback functions within each other that cause the code to be hard to read and manage.
*/   
 
/*Problem #13: Explain what is a promise and describe the possible states of promises.
A promise is an operation in stasis that may come to completion. It can be in three states, pending, fulfilled, or rejected.
*/ 

 /*
Problem #14: What is async/await?
async/await a way to handle asynchronous operations. Async tells that the function will return a promise, and Await tells the function to wait for the promise to be complete. 
*/ 


// Problem 15 

const getCharctersName =  async () =>{

    try {
        const result = await fetch('https://rickandmortyapi.com/api/character')
        const data = await result.json()
        
        const characterNames = []

        for(const {name} of data.results){
        characterNames.push(name)
        }
        console.log(characterNames)
        
    } catch (error) {
        console.log(error.message)
        
    }

}

console.log(getCharctersName())


const getCharctersName2 = async () =>{
     try {
        const [result1, result2 ] = await Promise.all([fetch('https://rickandmortyapi.com/api/character/2'),fetch('https://randomuser.me/api/?results=1')])
        const [randomuser, rickandmort] = await Promise.all([result1.json(),result2.json()])

        const characterNames2  =[]
       
        const {
            name:{
                first,
                last
            }
        } = rickandmort.results[0]

        characterNames2.push(randomuser.name,`${first} ${last}`)
        console.log(characterNames2)
        
     } catch (error) {
        console.log(error.message)
        
     }
}

console.log(getCharctersName2())

//Problem #16: OOP

class Shape{
    constructor(name,sides, sideLength){
        this.name = name;
        this.sides = sides
        this.sideLength = sideLength       
    }
    
    calcPerimeter(){
        const perimeter = this.sides * this.sideLength
        console.log(perimeter)
    }



}

const square = new Shape("sqaure",4,5)
console.log(square)
square.calcPerimeter()
const triangle = new Shape("triangle",3,3)
triangle.calcPerimeter()

//Problem 17

class Square extends Shape{
    constructor(sideLength){
        super("sqaure", 4,sideLength)
    }

    calcArea(){
       const area = this.sideLength * this.sideLength
       console.log(area)
    }
    

}

const sqaure1 = new Square(6)
sqaure1.calcPerimeter()
sqaure1.calcArea()