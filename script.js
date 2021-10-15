let numberOfFilms;
numberOfFilms = +prompt( `Сколько фильмов вы уже посмотрели?`, '');

const personalMovieDB = {
    cound: numberOfFilms, 
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt (`Один из последних просмотрених фильмов`, ''),
      b = prompt (`На сколько оцените его`, ''),
      c = prompt (`Один из последних просмотрених фильмов`, ''),
      d = prompt (`На сколько оцените его`, ''),
      g = prompt ('Члени', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

personalMovieDB.actors[g] = a;

console.log(personalMovieDB);