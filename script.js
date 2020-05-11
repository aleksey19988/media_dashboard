let toggle = document.querySelector('.toggle_container'); //Контейнер с переключателем
let toggleBall = toggle.querySelector('.ball');//Кружок в переключателе
let toggleCheckbox = document.getElementById('theme');//Чекбокс
let toggleText = document.querySelector('.theme_text');// Подпись к переключателю
let body = document.querySelector('body');// Задний фон сайта
let topBgBlock = document.querySelector('.background');//Цвет верхнего блока на фоне
let HeadPageHeader = document.querySelector('h1');//Заголовок на сайте
let headDescr = document.querySelector('.head_descr');//Подпись под заголовком сайта
let bigCard = document.querySelectorAll('.total_card');//Большие карточки
let bigCardLink = document.querySelectorAll('.icon_and_link');//Ник в каждой карточке
let totalValue = document.querySelectorAll('.total_value');//Значения в больших карточках
let totalDescr = document.querySelectorAll('.total_descr');//Слово "подписчики" в больших карточках
let smallCard = document.querySelectorAll('.today_card');//Маленькие карточки
let todayDescr = document.querySelectorAll('.today_descr');//Описание в маленьких карточках
let todayValue = document.querySelectorAll('.today_value');//Цифры в маленьких карточках
let attributionText = document.querySelectorAll('.attribution_text');//Текст в подвале


toggle.onclick = function() {
    if (toggle.style.backgroundColor === 'red') {
        toggle.style.backgroundColor = 'gray';
        toggleBall.style.transform = 'translateX(0px)';
        toggleBall.style.backgroundColor = '#fff';
        body.style.backgroundColor = 'white';
        topBgBlock.style.backgroundColor = 'rgb(247, 247, 247)';
        HeadPageHeader.style.color = 'rgb(51, 51, 51)';
        headDescr.style.color = 'rgb(51, 51, 51)';
        toggleText.style.color = 'rgb(51, 51, 51)';
        for (let i = 0; i < bigCard.length; i++) { //Цикл, чтобы ВСЕ большие карточки меняли цвет
            let card = bigCard[i];
            card.style.backgroundColor = 'rgb(238, 238, 238)';
        }
        for (let j = 0; j < bigCardLink.length; j++) {//Аналогично карточкам меняются никнеймы
            let nickName = bigCardLink[j];
            nickName.style.color = 'gray';
        }
        for (let j = 0; j < totalValue.length; j++) {//Меняется значение (цифры)
            let cardValue = totalValue[j];
            cardValue.style.color = 'rgb(51, 51, 51)';
        }
        for (let j = 0; j < totalDescr.length; j++) {//Меняется цвет слова "подписчики"
            let cardDescr = totalDescr[j];
            cardDescr.style.color = 'gray';
        }
        for (let i = 0; i < smallCard.length; i++) { //Цикл, чтобы ВСЕ маленькие карточки меняли цвет
            let card = smallCard[i];
            card.style.backgroundColor = 'rgb(238, 238, 238)';
        }
        for (let j = 0; j < todayDescr.length; j++) {//Аналогично карточкам меняются никнеймы
            let nickName = todayDescr[j];
            nickName.style.color = 'gray';
        }
        for (let j = 0; j < todayValue.length; j++) {//Меняется значение (цифры)
            let cardValue = todayValue[j];
            cardValue.style.color = 'rgb(51, 51, 51)';
        }
        for (let j = 0; j < attributionText.length; j++) {//Меняется цвет текста в подвале
            let text = attributionText[j];
            text.style.color = '#000';
        }
    } else {
        toggle.style.backgroundColor = 'red';
        toggleBall.style.transform = 'translateX(25px)';
        toggleBall.style.backgroundColor = 'hsl(230, 17%, 14%)';
        body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        topBgBlock.style.backgroundColor = 'hsl(232, 19%, 15%)';
        HeadPageHeader.style.color = '#fff';
        headDescr.style.color = '#fff';
        toggleText.style.color = '#fff';
        for (let i = 0; i < bigCard.length; i++) { //Цикл, чтобы ВСЕ большие карточки меняли цвет
            let card = bigCard[i];
        card.style.backgroundColor = 'hsl(228, 28%, 20%)';
        }
        for (let j = 0; j < bigCardLink.length; j++) {//Аналогично карточкам меняются никнеймы
            let nickName = bigCardLink[j];
            nickName.style.color = 'hsl(228, 34%, 66%)';
        }
        for (let j = 0; j < totalValue.length; j++) {//Меняется значение (цифры)
            let cardValue = totalValue[j];
            cardValue.style.color = '#fff';
        }
        for (let j = 0; j < totalDescr.length; j++) {//Меняется цвет слова "подписчики"
            let cardDescr = totalDescr[j];
            cardDescr.style.color = 'hsl(228, 34%, 66%)';
        }
        for (let i = 0; i < smallCard.length; i++) { //Цикл, чтобы ВСЕ маленькие карточки меняли цвет
            let card = smallCard[i];
        card.style.backgroundColor = 'hsl(228, 28%, 20%)';
        }
        for (let j = 0; j < todayDescr.length; j++) {//Аналогично карточкам меняются никнеймы
            let nickName = todayDescr[j];
            nickName.style.color = 'hsl(228, 34%, 66%)';
        }
        for (let j = 0; j < todayValue.length; j++) {//Меняется значение (цифры)
            let cardValue = todayValue[j];
            cardValue.style.color = '#fff';
        }
        for (let j = 0; j < attributionText.length; j++) {//Меняется цвет текста в подвале
            let text = attributionText[j];
            text.style.color = '#fff';
        }
    }
}