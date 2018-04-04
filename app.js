
// Creates a variable called "myName", and sets it to "Bobby".
let myName = "Bobby";


// Creates a constant variable called "usStates", and sets it to 50.
const usStates = 50;


// Creates a variable named "fivePlusFour" and sets it to equal the result of 5 + 4.
let fivePlusFour = (5+4);


//When run, prompts an alert to come up that states "Back of the Line!" if the variable myName has a first letter in its string that is less than the ASCII charachter 76, which is L. Otherwise, an altert showing "Next!" executes instead.

if (myName.charCodeAt(0) > 76 ) {
    alert('Back of the Line!')
} else {
    alert('Next!')
};



//When run, executes an alert on the page that says "Hello World!"

function sayHello() {
   alert('Hello World!');
};
sayHello();



// When run, checks the age of each person, and creates an alert for those under the age of 21.


function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`)
    }
};


checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);


// Logs each Vegetable to the console using a loop funtion

let bestVeggies = ['tomato', 'potato', 'onion', 'garlic', 'squash'];

for(let i=0; i < bestVeggies.length; i++) {
    console.log(bestVeggies[i]);
}



//Created an array with objects representing the name and age of 5 friends, then created a loop that used the checkAge function on each one.

let friends = [
    {
        name: 'Rob',
        age: 23
    },
    {
        name: 'Joe',
        age: 20
    },
    {
        name: 'Ted',
        age: 28
    },
    {
        name: 'Gary',
        age: 19
    },
    {
        name: 'Molly',
        age: 26
    }
];

for(let i=0; i < friends.length; i++) {
    let x = friends[i].name
    let y = friends[i].age
    checkAge(x, y);
};




//Created a function which can be referenced to count the number of letters in a word.

function getLength(x) {
    return x.length;
}

let helloWorld = getLength('Hello World');

if (helloWorld % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!')
};