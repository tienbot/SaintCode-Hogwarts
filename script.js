import {data as people} from './data.js'

renderCard(people)

function renderCard(data){
    data.forEach(el => {
        createCard(el)
    })
}

function createCard(obj) {
    const container = document.body.querySelector("section").querySelector(".container")
    const card = document.createElement('div')
    card.className = "card"

    const img = document.createElement('img')
    img.setAttribute("src", obj.image)

    const card_text = document.createElement('div')
    card_text.className = "card__text"
    const name = document.createElement('p')
    name.className = "name"
    name.innerText = obj.name
    const actor = document.createElement('p')
    actor.innerText = `Actor: ${obj.actor}`
    const gender = document.createElement('p')
    gender.innerText = `Gender: ${obj.gender}`
    const house = document.createElement('p')
    house.innerText = `House: ${obj.gender}`
    const wand = document.createElement('p')
    wand.innerText = `Wand core: ${obj.wand.core}`
    const alive = document.createElement('p')
    obj.alive ? alive.innerText = `Alive: yes` : alive.innerText = `Alive: no`


    container.append(card)
    card.append(img, card_text)
    card_text.append(name, actor, gender, house, wand, alive)
}