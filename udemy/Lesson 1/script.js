"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Склолько фильмов вы просмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Склолько фильмов вы просмотрели?", "");
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i <= 1; i++) {
    const a = prompt("Один и з послених просмотреных фильмов", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && (a != "") & (b != "") && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы класический зритель");
  } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
    console.log("Вы киноман");
  } else {
    console.log("error");
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);
