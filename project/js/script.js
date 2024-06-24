/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Что-то там",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector(".promo__adv"),
      promo = document.querySelector(".promo__bg"),
      genre = promo.querySelector(".promo__genre"),
      newList = document.querySelectorAll(".promo__interactive-item");

adv.remove();

genre.textContent = 'Драма';

promo.style.backgroundImage = `url('/img/bg.jpg')`;

console,console.log((newList));

movieDB.movies.sort();

// for (let i = 0; i < newList.length; i++) {
//     newList[i].textContent = `${i+1} - ${movieDB.movies[i]}`;
// };

movieDB.movies.forEach((film, i) => {
    newList[i].textContent = `${i+1} - ${film}`;
});