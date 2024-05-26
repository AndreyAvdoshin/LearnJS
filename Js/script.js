"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
              grade = prompt("На сколько оцените его?", "");
    
        if (lastFilm != null && grade != null && lastFilm != '' && grade != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = grade;
            console.log("Done!"); 
        } else {
            console.log("Error");
            i--;
        }
    };
};

//rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Посмотрели мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Нормально так посмотрели!");
    };
};

detectPersonalLevel();

function shovMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i -1] = prompt(`Ваш любимы жанр под номером ${i}`);
    }
}

writeYourGenres();
shovMyDB();