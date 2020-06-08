(function () {
  'use strict';

  const BASE_URL = "https://api.themoviedb.org/3";
  const KEY = "f1540f730f26f48851aa3a0a12af3257";

  const getSearchUrl = query => `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`;

  const $filmSearch = document.getElementById("film-search");
  const $input = document.getElementById("input");
  const $films = document.getElementById("films");
  const $details = document.getElementById("details");

  const getMovieCard = movie => {
    return `
  <li class="film__item animate__animated animate__zoomInDown">
    ${movie.poster_path ? `<img class="film__item-img" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="img">` : `<img class="film__item-img" title="No poster for now" src="images/ph.png" alt="img">`}
    <h2 class="film__item-title">${movie.original_title}</h2>
    <a href="#details" id="button" class="button">WATCH DETAILS</a>
  </li>`;
  };

  const renderMovies = movies => {
    const content = movies.map(getMovieCard);
    $films.innerHTML = content.join("");
  };

  const getDescription = link => {
    const detailsTitle = document.getElementById("details-title");
    const detailsText = document.getElementById("details-text");
    const detailsRelease = document.getElementById("details-data");
    const deatilsRating = document.getElementById("details-rating");
    detailsTitle.innerText = `${link.title}`;
    detailsText.innerText = `Description: ${link.overview}`;
    detailsRelease.innerText = `Release Date: ${link.release_date}`;
    deatilsRating.innerText = `Worlds Rating: ${link.vote_average}`;
  };

  const showDescription = APIData => {
    const $button = document.querySelectorAll(".button");

    for (let i = 0; i < $button.length; i++) {
      document.addEventListener("click", event => {
        if (event.target == $button[i]) {
          $details.classList.add("active");
          getDescription(APIData[i]);
        }
      });
    }
  };

  const getMovies = query => {
    if (query) {
      fetch(getSearchUrl(query)).then(res => res.json()).then(data => {
        if (data.results) {
          renderMovies(data.results), showDescription(data.results);
        }
      }).catch(err => console.log(err));
    } else {
      $films.innerHTML = "";
      $details.classList.remove("active");
    }
  };

  $input.addEventListener("input", event => {
    const {
      value
    } = event.target;
    getMovies(value);
  });

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvM1wiO1xyXG5jb25zdCBLRVkgPSBcImYxNTQwZjczMGYyNmY0ODg1MWFhM2EwYTEyYWYzMjU3XCI7XHJcblxyXG5jb25zdCBnZXRTZWFyY2hVcmwgPSAocXVlcnkpID0+XHJcbiAgICBgJHtCQVNFX1VSTH0vc2VhcmNoL21vdmllP2FwaV9rZXk9JHtLRVl9JnF1ZXJ5PSR7cXVlcnl9YDtcclxuXHJcbmNvbnN0ICRmaWxtU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxtLXNlYXJjaFwiKTtcclxuY29uc3QgJGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcclxuY29uc3QgJGZpbG1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxtc1wiKTtcclxuY29uc3QgJGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIik7XHJcbmNvbnN0IGdldE1vdmllQ2FyZCA9IChtb3ZpZSkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICA8bGkgY2xhc3M9XCJmaWxtX19pdGVtIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3pvb21JbkRvd25cIj5cclxuICAgICR7XHJcbiAgICAgICAgbW92aWUucG9zdGVyX3BhdGhcclxuICAgICAgICAgICAgPyBgPGltZyBjbGFzcz1cImZpbG1fX2l0ZW0taW1nXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwke21vdmllLnBvc3Rlcl9wYXRofVwiIGFsdD1cImltZ1wiPmBcclxuICAgICAgICAgICAgOiBgPGltZyBjbGFzcz1cImZpbG1fX2l0ZW0taW1nXCIgdGl0bGU9XCJObyBwb3N0ZXIgZm9yIG5vd1wiIHNyYz1cImltYWdlcy9waC5wbmdcIiBhbHQ9XCJpbWdcIj5gXHJcbiAgICAgICAgfVxyXG4gICAgPGgyIGNsYXNzPVwiZmlsbV9faXRlbS10aXRsZVwiPiR7bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oMj5cclxuICAgIDxhIGhyZWY9XCIjZGV0YWlsc1wiIGlkPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIj5XQVRDSCBERVRBSUxTPC9hPlxyXG4gIDwvbGk+YDtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlck1vdmllcyA9IChtb3ZpZXMpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBtb3ZpZXMubWFwKGdldE1vdmllQ2FyZCk7XHJcbiAgICAkZmlsbXMuaW5uZXJIVE1MID0gY29udGVudC5qb2luKFwiXCIpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAobGluaykgPT4ge1xyXG4gICAgY29uc3QgZGV0YWlsc1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLXRpdGxlXCIpO1xyXG4gICAgY29uc3QgZGV0YWlsc1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHMtdGV4dFwiKTtcclxuICAgIGNvbnN0IGRldGFpbHNSZWxlYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWRhdGFcIik7XHJcbiAgICBjb25zdCBkZWF0aWxzUmF0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLXJhdGluZ1wiKTtcclxuXHJcbiAgICBkZXRhaWxzVGl0bGUuaW5uZXJUZXh0ID0gYCR7bGluay50aXRsZX1gO1xyXG4gICAgZGV0YWlsc1RleHQuaW5uZXJUZXh0ID0gYERlc2NyaXB0aW9uOiAke2xpbmsub3ZlcnZpZXd9YDtcclxuICAgIGRldGFpbHNSZWxlYXNlLmlubmVyVGV4dCA9IGBSZWxlYXNlIERhdGU6ICR7bGluay5yZWxlYXNlX2RhdGV9YDtcclxuICAgIGRlYXRpbHNSYXRpbmcuaW5uZXJUZXh0ID0gYFdvcmxkcyBSYXRpbmc6ICR7bGluay52b3RlX2F2ZXJhZ2V9YDtcclxufTtcclxuY29uc3Qgc2hvd0Rlc2NyaXB0aW9uID0gKEFQSURhdGEpID0+IHtcclxuICAgIGNvbnN0ICRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGJ1dHRvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSAkYnV0dG9uW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAkZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2V0RGVzY3JpcHRpb24oQVBJRGF0YVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldE1vdmllcyA9IChxdWVyeSkgPT4ge1xyXG4gICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgICAgZmV0Y2goZ2V0U2VhcmNoVXJsKHF1ZXJ5KSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJNb3ZpZXMoZGF0YS5yZXN1bHRzKSwgc2hvd0Rlc2NyaXB0aW9uKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGZpbG1zLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgJGRldGFpbHMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxufTtcclxuXHJcbiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBnZXRNb3ZpZXModmFsdWUpO1xyXG59KTsiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJLRVkiLCJnZXRTZWFyY2hVcmwiLCJxdWVyeSIsIiRmaWxtU2VhcmNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIiRpbnB1dCIsIiRmaWxtcyIsIiRkZXRhaWxzIiwiZ2V0TW92aWVDYXJkIiwibW92aWUiLCJwb3N0ZXJfcGF0aCIsIm9yaWdpbmFsX3RpdGxlIiwicmVuZGVyTW92aWVzIiwibW92aWVzIiwiY29udGVudCIsIm1hcCIsImlubmVySFRNTCIsImpvaW4iLCJnZXREZXNjcmlwdGlvbiIsImxpbmsiLCJkZXRhaWxzVGl0bGUiLCJkZXRhaWxzVGV4dCIsImRldGFpbHNSZWxlYXNlIiwiZGVhdGlsc1JhdGluZyIsImlubmVyVGV4dCIsInRpdGxlIiwib3ZlcnZpZXciLCJyZWxlYXNlX2RhdGUiLCJ2b3RlX2F2ZXJhZ2UiLCJzaG93RGVzY3JpcHRpb24iLCJBUElEYXRhIiwiJGJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0TW92aWVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7OztFQUFBLE1BQU1BLFFBQVEsR0FBRyw4QkFBakI7RUFDQSxNQUFNQyxHQUFHLEdBQUcsa0NBQVo7O0VBRUEsTUFBTUMsWUFBWSxHQUFJQyxLQUFELElBQ2hCLEdBQUVILFFB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
