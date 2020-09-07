"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("Склолько фильмов вы просмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Склолько фильмов вы просмотрели?", "");
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы класический зритель");
    } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
      console.log("Вы киноман");
    } else {
      console.log("error");
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 2; i++) {
      /* let genre = prompt(`Ваш любимы жанр под номером ${i}`);

      if (genre === "" || genre === null) {
        console.log("Вы ввели некорретные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      } */

      let genres = prompt(
        `Введите ваши любимые жанры через запятую ${i}`
      ).toLowerCase();

      if (genres === "" || genres === null) {
        console.log("Вы ввели некорретные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимыйжанр ${i + 1} - это ${item}`);
    });
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
