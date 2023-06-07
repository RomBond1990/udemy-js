"use strict";

let numberOfFilms = prompt("How many movies have you seen already?", "")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastMovie1 = prompt("One of the last movies you saw?", "")
let movieRate1 = prompt("How much do you rate it?", "")
let lastMovie2 = prompt("One of the last movies you saw?", "")
let movieRate2 = prompt("How much do you rate it?", "")
personalMovieDB.movies[lastMovie1] = movieRate1;
personalMovieDB.movies[lastMovie2] = movieRate2;
console.log(personalMovieDB)
