/*The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293. 

The value saved to kelvin will stay constant. Choose the variable type with this in mind.*/

const kelvin = 0;
/*
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.*/
const celsius = kelvin - 273;
/*
Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32

In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.
When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.*/
const fahrenheit = Math.floor(celsius * (9/5) + 32);

const newton = celsius * (33/100);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);














