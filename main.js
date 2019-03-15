/*An exercise in using JS functions to streamline code.
Three different functions are designed to print HTML  to the dom. */
// const firstName = 'Sarah';
// const lastName = 'Thorne';
// const firstName1 = 'Lillah';
// const lastName1 = 'Watson';
//console.log(firstName + ' ' + lastName);
//console.log(`${firstName} ${lastName}`);
//console.log(`${firstName1} ${lastName1}`);
//function below console logs out a string with a first and last name, to demonstrate use of functions, console logs, and function execution.
const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};
namePrinter('Sarah', 'Thorne');
namePrinter('Lillah', 'Watson');
namePrinter('Nice', 'Person');
namePrinter('Exactly', 'Right');
namePrinter('Interesting', 'Idea');
// next two functions below create and returns string with one parameter passed into each function.
const nuggetizer = (animal) => {
    return `processed ${animal}`;
};
console.log(nuggetizer('pig'));

const dogBreed = (breed) => {
    return `My favorite breed of dog is ${breed}!`;
};
console.log(dogBreed('Great Pyrenees'));
const dogBreedDiv = document.getElementById('dog-breed');
console.log('dog breed div', dogBreedDiv);
dogBreedDiv.innerHTML = dogBreed('Great Pyrenees');
const animalDiv = document.getElementById('animal');
animalDiv.innerHTML = nuggetizer('pig')
//function below prints to the DOM by selecting a div by its id and setting the div's inner HTML to a string passed in as a parameter.
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}
printToDom('animal', nuggetizer('cucumber'));
//function below constructs an HTML string which builds a list of band names, to be passed into the printToDom function above.
let bandNumber = 1;
const addBand = (bandName) => {
    const htmlToPrint = `<p>${bandNumber}. ${bandName}</p>`;
    printToDom('band-list', htmlToPrint);
    bandNumber++;
};
addBand('Sigur Ros');
addBand('PNK');