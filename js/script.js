"use strict";

let numberOfFilms = prompt("How many movies have you seen already?", "")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    let lastMovie, movieRate;
    do {
        lastMovie = prompt("One of the last movies you saw?", "");
    } while (lastMovie.length === 0 || lastMovie.length > 50)
    do {
        movieRate = prompt("How much do you rate it?", "");
    } while (movieRate.length === 0 || movieRate.length > 50)
    personalMovieDB.movies[lastMovie] = movieRate;
}

if (numberOfFilms < 10) {
    alert("watched quite a few movies");
} else if (10 <= numberOfFilms < 30) {
    alert("you are a classic viewer");
} else if (numberOfFilms >= 30) {
    alert("you are movie fan");
} else {
    alert("something wrong")
}
console.log(personalMovieDB)