const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "f1540f730f26f48851aa3a0a12af3257";

const getSearchUrl = (query) =>
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`;

const $filmSearch = document.getElementById("film-search");
const $input = document.getElementById("input");
const $films = document.getElementById("films");
const $details = document.getElementById("details");
const getMovieCard = (movie) => {
    return `
  <li class="film__item animate__animated animate__zoomInDown">
    ${
        movie.poster_path
            ? `<img class="film__item-img" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="img">`
            : `<img class="film__item-img" title="No poster for now" src="images/ph.png" alt="img">`
        }
    <h2 class="film__item-title">${movie.original_title}</h2>
    <a href="#details" id="button" class="button">WATCH DETAILS</a>
  </li>`;
};

const renderMovies = (movies) => {
    const content = movies.map(getMovieCard);
    $films.innerHTML = content.join("");
};

const getDescription = (link) => {
    const detailsTitle = document.getElementById("details-title");
    const detailsText = document.getElementById("details-text");
    const detailsRelease = document.getElementById("details-data");
    const deatilsRating = document.getElementById("details-rating");

    detailsTitle.innerText = `${link.title}`;
    detailsText.innerText = `Description: ${link.overview}`;
    detailsRelease.innerText = `Release Date: ${link.release_date}`;
    deatilsRating.innerText = `Worlds Rating: ${link.vote_average}`;
};
const showDescription = (APIData) => {
    const $button = document.querySelectorAll(".button");
    for (let i = 0; i < $button.length; i++) {
        document.addEventListener("click", (event) => {
            if (event.target == $button[i]) {
                $details.classList.add("active");
                getDescription(APIData[i]);
            }
        });
    }
};

const getMovies = (query) => {
    if (query) {
        fetch(getSearchUrl(query))
            .then((res) => res.json())
            .then((data) => {
                if (data.results) {
                    renderMovies(data.results), showDescription(data.results);
                }
            })
            .catch((err) => console.log(err));
    } else {
        $films.innerHTML = "";
        $details.classList.remove("active");
    }
};

$input.addEventListener("input", (event) => {
    const { value } = event.target;
    getMovies(value);
});