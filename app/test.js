console.log('Wygląda na to, że wszystko działa :)');


setTimeout(() => {
    console.log('it works');
}, 3000);

setInterval(() => {
    console.log('it works');
}, 2000);


const text = "HEllo World";

let counter = 0;

const something = setInterval (() => {
   console.log(text[counter]);
   counter++

   if(counter == text.length)
   	clearInterval(something);
}, 400);



process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});