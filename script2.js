import {data as people} from './data.js'

let names = window.localStorage.getItem('names');
let likedPerson = people.filter(word => names.includes(word.name))

//кнопка лакйка ждет нажатия
// getLike(like)

//рендер карточки
renderCard(likedPerson)

//передать данные из БД в карточки
function renderCard(data){
    data.forEach(el => {
        createCard(el)
    })
}

//отобразить карточки на странице
function createCard(obj) {
    const container = document.body.querySelector("section").querySelector(".container")
    //создаем карточку
    const card = document.createElement('div')
    card.className = "card"
    //создаем кнопку лайка
    // const like = document.createElement('button')
    // like.className = "favorite favorite__liked like";
    //создаем картинку
    const img = document.createElement('img')
    img.setAttribute("src", obj.image)
    //создаем текстовый блок
    let card_text = document.createElement('div')
    card_text.className = "card__text";
    
    obj.alive ? obj.alive = `yes` : obj.alive = `no`
    
    //добавляем информацию в текстовый блок
    card_text.innerHTML = `
        <p class="name">${obj.name}</p>
        <p class="actor">Actor: ${obj.actor}</p>
        <p>Gender: ${obj.gender}</p>
        <p>House: ${obj.house}</p>
        <p>Wand core: ${obj.wand.core}</p>
        <p>Alive: ${obj.alive}</p>`

    container.append(card) //выводим карточку
    card.append(img, card_text) //выводим картинку и текстовый блок
    // card.append(like) //выводим кнопку лайка
}