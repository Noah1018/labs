// Exercise 1
// Create an array containing three sample movie objects. Each movie should have five properties:
// - a title, - run-length in minutes, a website URL for the movie
// - an object containing the director’s name and country
// - a ratings array that contains some sample rating numbers out of 10 (imagine if there had been 20 ratings
// made, this array would contain 20 numbers).

const movies = [ 
    { title: "The Matrix",
    length: 136,
    url: "https://www.imdb.com/title/tt0133093/",
    director: {name: "Lana Wachowski", country: "USA"},
    ratings: [8, 9, 10, 8, 7, 9, 10, 10, 8, 9, 10, 8, 7, 9, 10, 10, 8, 9, 10, 8]
    },
    { title: "The Matrix Reloaded",
    length: 138,
    url: "https://www.imdb.com/title/tt0234215/",
    director: {name: "Lana Wachowski", country: "USA"},
    ratings: [8, 9, 10, 8, 7, 9, 10, 10, 8, 9, 10, 8, 7, 9, 10, 10, 8, 9, 10, 8]
    },
    { title: "The Matrix Revolutions",
    length: 129,
    url: "https://www.imdb.com/title/tt0242653/",
    director: {name: "Lana Wachowski", country: "USA"},
    ratings: [8, 9, 10, 8, 7, 9, 10, 10, 8, 9, 10, 8, 7, 9, 10, 10, 8, 9, 10, 8]   
    }
];

// Exercise 2
// Loop through this movie array and output to the console the title and director’s name of each movie.

for (const m of movies) {
    console.log(m.title + m.director.name);
}
// Exercise 3
// Write a function that is passed a single movie object as an argument/parameter. It must return as a
// _string_ a proper hyperlink/anchor (`<a>`) tag, with the website `url` property for the `href` attribute and
// the `title` property for the link label. *Provide an invocation.*

function mov (movies) {

    return  output = `<a href=${movies[0].url}> ${movies[0].title}</a>`
   
   
}
console.log(mov(movies));

// Exercise 4
// Write a function that is passed a single movie object as an argument/parameter. It needs to calculate and
// return the average rating for the movie. *Provide an invocation.*

function avgRating (movies) {
    let total = 0;
    for (const r of movies[0].ratings) {
        total += r;
    }
    return total / movies[0].ratings.length;
}
console.log(avgRating(movies));

const paintings = [
{ title: "Madonna and Child", year: 1315, artist: "Giotto", link: "http://www.nga.gov/art-object-page.397.html" },
{ title: "Judgement of Paris", year: 1608, artist: "Rubens", link:
"https://www.museodelprado.es/en/the-collection/art-work/the-judgement-of-paris"},
{ title: "Surrender of Breda", year: 1608, artist: "Velázquez", link:
"https://www.museodelprado.es/en/the-collection/art-work/the-surrender-of-breda"},
];
// Exercise 5
// Create a function constructor named Painting that constructs an object with the above painting structure.
function Painting (title, year, artist, link) {
    this.title = title;
    this.year = year;
    this.artist = artist;
    this.link = link;
}   

// Exercise 6
// Add a function to your function constructor that returns as a string the markup necessary to represent the
// painting title as a hyperlink: e.g., `<a href="http://www.nga.gov/content/ngaweb/Collection/art-object-
// page.397.html">Madonna and Child</a>

const madonna = new Painting("Madonna and Child", 1315, "Giotto", "http://www.nga.gov/art-object-page.397.html");

Painting.prototype.hyperlink = function () {
    return `<a href=${this.link}> ${this.title}</a>`;
}

console.log(madonna.hyperlink());