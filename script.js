//получить данные из БД
import {data as people} from './data.js'
//рендер карточки
renderCard(people)

//присваиваем переменные
const card = Object.values(document.querySelectorAll('.card'))
const h1 = document.querySelector('h1')
const inputName = document.querySelector('#name')
const inputSchool = document.querySelector('#school')
const form = document.querySelector('form')
const like = document.querySelectorAll('.favorite')
let likedPerson = []

//кнопка лакйка ждет нажатия
getLike(like)

//убрать дефолтное поведение формы (убрать обновление страницы)
form.addEventListener("submit", (e)=>{
    e.preventDefault()
})

//input имени, настройка
inputName.addEventListener('change', (event) => {
    filter(event)
})
//input школы, настройка
inputSchool.addEventListener('change', (event) => {
    filter(event)
})

//при нажатии на заголовок, все карточки появляются
h1.addEventListener('click', () => {
    hideCard(card, false)
    inputName.value = ''
    inputSchool.value = ''
})

//фильтрация данных по инпутам 
function filter(event){
    hideCard(card, true)
    let schoolValue = inputSchool.value.toLowerCase()
    let nameValue = inputName.value.toLowerCase()
    card.map((el) => {
        let titleName = el.children[1].children[0].innerText.toLowerCase()
        let titleSchool = el.children[1].children[3].innerText.toLowerCase()
        if (titleName.includes(nameValue) && titleSchool.includes(schoolValue)){ 
            el.style.display="block"
        }
    })
}

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
    const like = document.createElement('button')
    like.className = "favorite";
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
    card.append(img, like, card_text) //выводим картинку и текстовый блок
}

//спрятать карточки на странице
function hideCard(card, isShow) {
    card.map((el) => {
        el.style = isShow ? 'display: none;' : 'display: block;'
    })
}

//поставить лайк
function getLike(element) {
    element.forEach(el => {
        el.addEventListener('click', ()=>{
            el.classList.toggle('like')
            if(el.classList.contains('like')) {
                likedPerson.push(el.parentElement.children[2].children[0].innerHTML)
            } else {
                likedPerson.pop(el.parentElement.children[2].children[0].innerHTML)
            }
            console.log(likedPerson)
        })
    })
}