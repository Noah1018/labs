// Exercise 1
// Use the prompt() function to ask the user for the number of minutes. Then use alert() to output the
// number entered.
// const mins = prompt("Enter the number of minutes");
// alert(mins);

// Exercise 2
// Use the prompt() function to ask the user for the number of minutes. Then use alert() to output the
// number of seconds. Be sure to create variables for minutes and seconds.
// const mins2 = prompt("Enter the number of minutes");
// alert(mins2 * 60);

// Exercise 3
// Use prompt twice to ask the user for a country and a city in that country. Create a string variable in the
// form “city is the capital of country”, but replace city and country with user inputted values. Use
// concatenation operator for this task. Using console.log, output the string variable.
// const country = prompt("Enter a country");
// const city = prompt("Enter the capitol city in " + country);
// const cc = city + " is the capitol of " + country;  
// console.log(cc);

// Exercise 4
// Do the same task but use template literals.
// const country = prompt("Enter a country");
// const city = prompt("Enter the capitol city in " + country);
// const cc = `${city} is the capitol of ${country}`;
// console.log(cc);

// Exercise 5
// Create an array of country names. Write two versions of the `for` loop (regular `for` and `for...of`) to
// output each country name to the console.

const countries = ["Canada", "USA", "Mexico", "France", "Germany", "Italy", "Spain", "Portugal", "Greece", ];
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
for (const c of countries) {
    console.log(c);

}

// Exercise 6
const links = [
["http://www.discord.com","Discord Home"],
["http://www.cbc.ca/news","CBC"],
["http://globalnews.ca/canada","Global News",],
["http://www.google.com","Google"]
];
// Use the above array in this exercise. Use document.write() and a loop to output an unordered list of
// hyperlinks, e.g., <a href="http://www.discord.com">Discord Home</a>

document.write("<ul>");

for (const l of links) {
    document.write(`<li> <a href=${l[0]}>${l[1]}</a> </li>`);
}

document.write("</ul>");