"use strict";

const numberOfFilms = +prompt("Склолько фильмов вы просмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
  console.log("Вы киноман");
} else {
  console.log("error");
}

console.log(personalMovieDB);
