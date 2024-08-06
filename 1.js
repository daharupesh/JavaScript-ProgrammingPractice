// let data = 8
// let user = "Navin"
// let num1 = 5/0
// let num2 = 1059445454545498983973n
// let num3 = 2
// console.log(num1)
// console.log(num2)
// string 
    //   let user = "Rupesh Kumar Daha"
    //   console.log(user)
// let user = "Rupesh daha \tvin \"Nepal\"";  //scape character
// console.log(user)

// console.log(`my name is rupesh 
// daha`)
//backtick


//how loop works
//types of loop
//  while loop
//  for loop
//  dowhile loop


// Object Data types....// Object represent the real entity..
    // let input = 'name'
    // let alien ={
    //     name:"Navin",
    //     tech:"js",
    //     'work exp': 4
    // }
    // console.log(alien[input]) //we are having two method to use dot and list..
// let alien ={
//     name : "Rupesh",
//     tech: 'js',
//     laptop :{
//        cpu: 'i7',
//        ram: 4,
//        brand: 'Asus'
//     }
// }
// console.log(alien?.laptop?.brand?.length)// ? is used to discard error..when findig brand
// delete alien.laptop.cpu
// console.log(alien)

// for(let key in alien){
//     console.log(key, alien[key])
// }

//  for(let key in alien.laptop){
//     console.log(key , alien.laptop[key])
//  }

//function in js... D R Y donot repeat yourself...

        // function Name(user){
        //     return `Hello ${user} !!!`
        // }
        // let user="Rupesh"
        // let ame = Name(user)
        // console.log(ame)

        // let add = function(a,b){
        //    return a+b
        // }     
        // let ADD = add
        // let sum = ADD(5,6)
        // console.log(sum)

//Arrow function...
        // let add =(a,b)=>{
        //     return a+b
        // }
        // console.log(add(3,4))

//Laptop


function getFastLaptop(laptop1,laptop2){
    if(laptop1.cpu > laptop2.cpu){
        console.log(laptop1)
    }
    else{
        console.log(laptop2)
    }
}
let laptop2 = {
    cpu:'i7',
    ram :16,
    brand:'apple',
    getConfig: function(){
        console.log(this.cpu)
    }
}        
let laptop1 = {
    cpu:'i9',
    ram :16,
    brand:'HP',
    compare: function(other){
        if(this.cpu > other.cpu){
            console.log(laptop1)
        }
        else{
            console.log(laptop2)
        }
    }
    // getConfig: function(){
    //     console.log(this.cpu)
    // }
}  

                // if(laptop1.cpu > laptop2.cpu){
                //     console.log(laptop1)
                // }
                // else{
                //     console.log(laptop2)
                  // }
// getFastLaptop(laptop1,laptop2)                  
// laptop1.getConfig()

// laptop1.compare(laptop2)  interesnting


// Constructor object....
                // function Alien(name , tech){
                //     this.name = name
                //     this.tech = tech
                //     this.work = function(time){
                //         console.log(`we are working ${time} hours per week!!!`)
                //     }

                // }


                // let alien1= new Alien('Ram','hp')
                // let alien2= new Alien('sita','java')
                // let alien3= new Alien('Krishna','c++')
                // alien1.name ="Gita";

                // console.log(alien1)
                // console.log(alien2)
                // console.log(alien3)
                // alien1.work(7)
                // alien2.work(8)
                // alien3.work(9)
//Array...
                    // let values =[5,7,8];
                    //                             // values.push(5);
                    //                             // values.push(7);
                    // console.log(values[0])   //index always start from 0.

                    // let data = ['rupesh','5',{tech:'js'},function(){
                    //     console.log("Hellow rupesh");
                    // }]

                    // console.log(data)
                    // data[3]()

//Different methods

//push()
                // let data=[1,2,3,4,5]
                // console.log(data.push(4,5,6))  //push fuctions return length and add the value at last index,  more number of value can be add from last index
                // console.log(data)


//pup()

            // let data=[1,2,3,4,5]
            // console.log(data.pop())  //remove value from last index and return length of string after removing...
            // console.log(data)


//shift()

            // let data=[1,2,3,4,5]
            // console.log(data.shift())  // remove value from fist index and return fist index values...
            // console.log(data)
//unshift()

            // let data=[1,2,3,4,5]
            // console.log(data.unshift(6))  //add value at fist index and return the length of the array...
            // console.log(data)

//splice()

                let data=[1,2,3,4,5]
                console.log(data.splice(2,2,8,9,10,11,12)) // remove the value form in between on the basis of requirement ,can add value instead of removable value and return the removable value of list...
                console.log(data)
