"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    
        while (personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Посмотрели мало фильмов!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Нормально так посмотрели!");
        };
    },
    shovMyDB: function(hidden) {
        if (hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимы жанр под номером ${i}`)
            if (genre === null || genre === '') {
                console.log("Вы ввели некорректные данные");
                i--;
            } else {
                personalMovieDB.genres[i -1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр №${i+1} - это ${item}`)
        });
    },
    toggleVisibleMyDB: function() {
        if (!personalMovieDB.private) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};
