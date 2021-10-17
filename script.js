let numberOfFilms;
numberOfFilms = +prompt( `Сколько фильмов вы уже посмотрели?`, '');

const personalMovieDB = {
    cound: numberOfFilms, 
    movies: {},
    actors:{},
    genres:[],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt (`Один из последних просмотрених фильмов`, ''),
          b = prompt (`На сколько оцените его`, '');
          
    if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.cound < 10 ) {
    console.log(`Просмотрено довольно мало фильмов`);
} else if (personalMovieDB.cound >= 10 && personalMovieDB.cound < 30) {
    console.log(`Вы класний зритель`);
} else if (personalMovieDB.cound >= 30) {
    console.log('Вы киноман')
} else {
    console.log('Произлоша ошибка')
}

console.log(personalMovieDB);


