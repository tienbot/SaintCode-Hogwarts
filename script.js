import {data as people} from './data.js'

renderCard(people)

function renderCard(data){
    data.forEach(el => {
        createCard(el)
    })
}