//получить данные из БД
import {data as people} from './data.js'

renderCard(people)

const card = Object.values(document.querySelectorAll('.card'))
// const cardText = Object.values(document.querySelectorAll('.card__text'))
const inputName = document.querySelector('#name')

// const form = document.querySelector('form')
// form.addEventListener("click", (e)=>{
//     e.preventDefault()

// })

//input имени, настройка
inputName.addEventListener('change', (event) => {
    event.preventDefault()
    hideCard(card, true)
    let inputText = event.target.value.toLowerCase()
    card.map((el) => {
        let title = el.children[1].children[0].innerText.toLowerCase()
        if (title.includes(inputText)){ 
            el.style.display="block"
        }
    })
    event.target.value = ''
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
    card_text.className = "card__text"

    // card_text.innerHtml = `
    //     <p class="name">${obj.name}</p>
    //     <p>Actor: ${obj.actor}</p>
    //     <p>Gender: ${obj.gender}</p>
    //     <p>House: ${obj.house}</p>
    //     <p>Wand core: ${obj.wand.core}</p>
    //     <p>Alive: yes</p>`

    const name = document.createElement('p')
    name.className = "name"
    name.innerText = obj.name
    const actor = document.createElement('p')
    actor.innerText = `Actor: ${obj.actor}`
    const gender = document.createElement('p')
    gender.innerText = `Gender: ${obj.gender}`
    const house = document.createElement('p')
    house.innerText = `House: ${obj.house}`
    const wand = document.createElement('p')
    wand.innerText = `Wand core: ${obj.wand.core}`
    const alive = document.createElement('p')
    obj.alive ? alive.innerText = `Alive: yes` : alive.innerText = `Alive: no`

    container.append(card) //выводим карточку
    card.append(img, card_text) //выводим картинку и текстовый блок
    card_text.append(name, actor, gender, house, wand, alive) //выводим содержимое текстового блока
}

//спрятать карточки на странице
function hideCard(card, isShow) {
    card.map((el) => {
        el.style = isShow ? 'display: none;' : 'display: block;'
    })
}