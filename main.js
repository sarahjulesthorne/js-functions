//console.log('Hey there');
const firstName = 'Sarah';
const lastName = 'Thorne';
const firstName1 = 'Lillah';
const lastName1 = 'Watson';
//console.log(firstName + ' ' + lastName);
//console.log(`${firstName} ${lastName}`);
//console.log(`${firstName1} ${lastName1}`);
const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};
namePrinter('Sarah', 'Thorne');
namePrinter('Lillah', 'Watson');
namePrinter('Nice', 'Person');
namePrinter('Exactly', 'Right');
namePrinter('Interesting', 'Idea');

const nuggetizer = (animal) => {
return `processed ${animal}`;
};
console.log(nuggetizer('pig'));
const dogBreed = (breed) => {
return `My favorite breed of dog is ${breed}!`;
};
console.log(dogBreed('Great Pyrenees'));