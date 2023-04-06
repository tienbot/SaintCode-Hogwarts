//получить данные из БД
import {data as people} from './data.js'

renderCard(people)

const card = Object.values(document.querySelectorAll('.card'))
// const cardText = Object.values(document.querySelectorAll('.card__text'))
const h1 = document.querySelector('h1')
const inputName = document.querySelector('#name')
const inputSchool = document.querySelector('#school')

const form = document.querySelector('form')
form.addEventListener("submit", (e)=>{
    e.preventDefault()
})

//input имени, настройка
inputName.addEventListener('change', (event) => {
    hideCard(card, true)
    let inputText = event.target.value.toLowerCase()
    card.map((el) => {
        let titleName = el.children[1].children[0].innerText.toLowerCase()
        let titleSchool = el.children[1].children[3].innerText.toLowerCase()
        let schoolValue = inputSchool.value.toLowerCase()
        if (titleName.includes(inputText) && titleSchool.includes(schoolValue)){ 
            el.style.display="block"
        }
    })
})
//input школы, настройка
inputSchool.addEventListener('change', (event) => {
    hideCard(card, true)
    let inputText = event.target.value.toLowerCase()
    card.map((el) => {
        let titleName = el.children[1].children[0].innerText.toLowerCase()
        let titleSchool = el.children[1].children[3].innerText.toLowerCase()
        let nameValue = inputName.value.toLowerCase()
        if (titleSchool.includes(inputText) &&  titleName.includes(nameValue)){ 
            el.style.display="block"
        }
    })
})

h1.addEventListener('click', () => {
    hideCard(card, false)
})

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
        <p>Actor: ${obj.actor}</p>
        <p>Gender: ${obj.gender}</p>
        <p>House: ${obj.house}</p>
        <p>Wand core: ${obj.wand.core}</p>
        <p>Alive: ${obj.alive}</p>`

    container.append(card) //выводим карточку
    card.append(img, card_text) //выводим картинку и текстовый блок
}

//спрятать карточки на странице
function hideCard(card, isShow) {
    card.map((el) => {
        el.style = isShow ? 'display: none;' : 'display: block;'
    })
}