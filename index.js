// === SOAL 1 ===

// ES5
// const golden = function goldenFunction(){
//   console.log("this is golden!!")
// }

// ES6
const golden = () => console.log('this is golden!!')

golden()


// === SOAL 2 === 

// ES5
// const newFunction = function literal(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function(){
//       console.log(firstName + " " + lastName)
//       return 
//     }
//   }
// }

// ES6
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(firstName + " " + lastName)
    }
  }
}

//Driver Code 
newFunction("Willy", "Sianturi").fullName() 



// === SOAL 3 ===

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

// ES5
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;

// ES6
const { firstName, lastName, destination, occupation, spell} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)




// === SOAL 4 ===

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)

// ES6
const combined = [...west, ...east]

//Driver Code
console.log(combined)



// === SOAL 5 ===

const planet = "earth" 
const view = "glass" 
// var before = 'Lorem ' + view + 'dolor sit amet, ' +       
//               'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +     
//               'incididunt ut labore et dolore magna aliqua. Ut enim' +     
//               ' ad minim veniam'   


// ES6
let before = `Lorem ${view} dolor sit amet, 
consectetur adipiscing elit, ${planet} do eiusmod tempor     
incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam`

// Driver Code 
console.log(before) 