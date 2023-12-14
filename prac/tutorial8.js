const companies = [
    {
      symbol: "AAP", name: "Advance Auto Parts",
      financials: {
        years: [2019,2018,2017], revenue: [5163000,4914000,4472000],
      }
    },
    {
      symbol: "ADBE", name: "Adobe",
      financials: {
        years: [2019,2018,2017], revenue: [11171297,9030008,7301505],
      }
    },
    {
      symbol: "ALXN", name: "Alexion Pharmaceuticals",
      financials: {
        years: [2019,2018,2017], revenue: [6731000,6475000,5253000],
      }
    }
];
    
/* ----- Exercise 1 -----
	Use a .forEach function to loop through the companies and add a new property
	named threeYearRevenue to each company object in the array. It should be equal 
	to the sum of the revenue values.  Use a loop to calculate the revenue. 
    Verify it is correct by using console.dir(companies)  
*/

companies.forEach(c => {
    let total = 0;
    for (const r of c.financials.revenue) {
        total += r;
    }
    c.threeYearRevenue = total;
});
console.dir(companies);


/* ----- Exercise 2+3 -----
   Find the first company whose name is Adobe. Do this with for…of loop and the find method
*/

let match;

for (const company of companies) {
  if (company.symbol === "ADBE") {
    match = company;
    break; // Once found, exit the loop
  }
}
    console.dir(match);



/* ----- Exercise 4+5 -----
   Find all the company objects whose threeYearRevenue is less than 40 million. 
   That is, you should have an array of company objects when finished. 
   Use a for…of loop and then the filter method 
*/
const matches = [];
 for (const c of companies) {
      if (c.threeYearRevenue < 40000000) {
          matches.push(c);
      }
 }
 console.dir(matches);


/* ----- Exercise 6+7 -----
   Populate the existing <select> element with option elements whose label 
   is the company name and the value is the company symbol, e.g. 
   <option value=ALXN>Alexion Pharmaceuticals</option>.

   Don't forget DOM timing needs to be accomodated for exercises 6-9
*/
document.addEventListener("DOMContentLoaded", () => {
const select = document.querySelector("#companies");
for (const c of companies) {
const option = document.createElement('option');
option.value = c.symbol;
option.textContent = c.name;
select.appendChild(option);
}



/* ----- Exercise 8 -----
   When the submit button in the form is clicked, output the current values of the 
   city, country, and number input fields within the supplied div.
*/

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    const country = document.querySelector("#country").value;
    const number = document.querySelector("#number").value; 

    const outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `<p>City: ${city}, Country: ${country}, Number: ${number}</p>`;
});


/* ----- Exercise 9 -----
When the select element is changed (the input event), output a table in the supplied 
div that contains the financial info for the selected company. The table should 
contain two columns: year and revenue.
*/

select.addEventListener("input", () => {
    const company = companies.find(c => c.symbol === select.value);
    const outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `<table><tr><th>Year</th><th>Revenue</th></tr>`;
    for (let i = 0; i < company.financials.years.length; i++) {
        outputDiv.innerHTML += `<tr><td>${company.financials.years[i]}</td><td>${company.financials.revenue[i]}</td></tr>`;
    }
    outputDiv.innerHTML += `</table>`;
});

});