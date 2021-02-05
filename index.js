/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/

let test = 'qwerty';

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/

let sum = 10 + 20;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20 + 1);
console.log(random);

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: 'Gentrit',
    surname: 'Begaj',
    age: 28
};

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age;


/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/

me.skills = ['JavaScript', 'Python'] ;


/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/

me.skills.pop();
console.log(me);

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/

const dice = function() {
    return Math.floor(Math.random() * 6 + 1);
}
console.log(dice());

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/

const whoIsBigger = function(x, y) {
    return (x > y) ? x : y;
}
console.log(whoIsBigger(5,9));

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const splitMe = function(str) {
    return str.split(" ");
}
console.log(splitMe('I Love Coding'));


/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/

const deleteOne = function (str, bool) {
    return (bool === true) ? str.substring(1) : str.substring(0, str.length - 1)
}
console.log(deleteOne("Strive", true));

/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const onlyLetters = function (str) {
    return str.replace(/[0-9]/g, '')
}

console.log(onlyLetters("I love 123 whatever"));

/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/

function isThisAnEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
console.log(isThisAnEmail('fsdf@fsd.com'));

/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/

const whatDayIsIt = function() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days[date.getDay()];

}
console.log(whatDayIsIt());

/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

const rollTheDices = function (n) {
    let values = [];
    // let sumOfRolls = 0
    for (let i = 0; i < n; i++) {
        values.push(dice())
    }
    const sum = values.reduce((a,b) => a + b, 0);
    return {
        sum,
        values
    };
}
console.log(rollTheDices(5));

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/

const howManyDays = function (date) {
    let now = new Date();
    date = new Date(date);
    console.log(date.getDate());
    console.log(now.getDate());
    return Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24)); 
}
console.log(howManyDays('01/06/2021'));

/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/
const isTodayMyBDay=(date) => {
    date = new Date(date);
    console.log(date.getMonth() + 1);
    console.log(date.getDate());
    let now = new Date();
    if(now.getMonth() === date.getMonth() && now.getDate() === date.getDate()) {
        return true
    } 

    return false
    
    
};

 console.log(isTodayMyBDay("02/05/2015"));
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/

const deleteProp = function (obj, str) {
    delete obj['str'];
    return obj;
}

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

const olderMovie = function () {
    let years = [];
    for (let i = 0; i < movies.length; i++ ) {
        years.push(Number(movies[i].Year));
    }
    let smallestValue = Math.min(...years);
    let indexOfOldest = years.indexOf(smallestValue);
    return movies[indexOfOldest];
};
console.log(olderMovie(movies))


/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/
const countMovies = function (movies) {
    return movies.length;
}
/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/
const onlyTitles = function () {
    let titles = [];
    for (let i = 0; i < titles.length; i++) {
        titles.push(movies[i].Title);
    }
}

/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/
const onlyThisMillenium = function () {
    let milleniumMovies = [];
    for(let i = 0; i < movies.length; i++) {
        if (Number(movies[i].Year) >= 2000) {
            milleniumMovies.push(movies[i]);
        }
    }
    return milleniumMovies;
}
/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/

const getMoviesById = function (id) {
    for (i = 0; i < movies.length; i++) {
        if (movies[i].imdbID === id) {
            return movies[i];
        }
    }

}

console.log(getMoviesById('tt4154796'));

/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/

const sumYears = function () {
    let sumOfYears = 0;
    for (let i = 0; i < movies.length; i++) {
        sumOfYears += Number(movies[i].Year);
        
    }
    return sumOfYears;
}
console.log(sumYears());

/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/

const searchMovie = function (str) {
    str = str.toLowerCase();
    let moviesSearched = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Title.toLowerCase().includes(str)) {
            moviesSearched.push(movies[i])
        }
        
    }

    return moviesSearched;    
    
}

console.log(searchMovie("lord"));

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

const searchAndDivide = function (str) {
    str = str.toLowerCase();
    let match = [];
    let nonMatch = [];
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].Title.toLowerCase().includes(str)) {
            match.push(movies[i]);
        }
        else {
            nonMatch.push(movies[i]);
        }
    }

    return {
        match
        nonMatch
    }
}
console.log(searchAndDivide('lord'));

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

const deleteX = function (n, array) {
    let newArray = [];
    if (n >= array.length) {
        console.log(`Given 'n' exceeds the length of array`);
    } else {
    newArray = [...array.slice(0, n), ...array.slice(n + 1, array.length)];
    return newArray;
    }
}

console.log(deleteX(13, movies));



// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

const halfTree = (n) {
    let tree = '';
    for (let i = 0; i < n; i++) {
        tree += i * '*' ;
    }
    return tree;
}
console.log(halfTree(3));

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

function tree(n) {
    for (let i = 0; i <= n; i++){
      let star = '';
      //Changed to start high then decrease
      for (let k = 1; k <= n - i; k++){
        //shortened to one space
        star += " ";
      };
         for(let j = 0; j <= i; j++) {
             //Added space so there is an odd number
            //of symbols and the star above fits
            //the space
            star += " *";
         };
         //Moved into the loop
      console.log(star);
    };
  };
  
  tree(5);

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/

const isItPrime = function (n) {
    isPrime = true;
    if (n === 1) {
        console.log('1 is neither prime nor composite number.');
    }
    else if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
            
        }

        if (isPrime) {
            console.log(`${n} is a prime number`);
        } else {console.log(`${n} is not a prime number`);}
    }

    else {
        console.log(`The number is not a prime number`);
    }
};

isItPrime(6);

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]