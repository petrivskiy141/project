let numberOfFilms;


function start () {
    numberOfFilms = +prompt( `Сколько фильмов вы уже посмотрели?`, '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt( `Сколько фильмов вы уже посмотрели?`, '');
    }
}

start();

const personalMovieDB = {
    cound: numberOfFilms, 
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}




function rememberMyFilms () {
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

}
rememberMyFilms();



function decectPersonalLevel () {
    if (personalMovieDB.cound < 10 ) {
        console.log(`Просмотрено довольно мало фильмов`);
    } else if (personalMovieDB.cound >= 10 && personalMovieDB.cound < 30) {
        console.log(`Вы класний зритель`);
    } else if (personalMovieDB.cound >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произлоша ошибка');
    }
}
decectPersonalLevel();

function writeYouGenres () {
    for (let i = 1 ; i <= 3; i++) {
        
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр под номером ${i}`);
    }

}
writeYouGenres();

console.log(personalMovieDB);


