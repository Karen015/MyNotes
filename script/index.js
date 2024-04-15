import { tagCreator } from "./helpers.js";
import { noteCreatBtn, noteContainer } from "./constant.js";


let textAreas = [];
noteCreatBtn.addEventListener('click', () => {
    const tag = document.createElement('textarea');
    tag.setAttribute('placeholder', 'Some text...')
    noteContainer.appendChild(tag);
    tag.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            const id = generateId();
            textAreas.push({id, value: tag.value});
            saveToLocalStorage();
            e.preventDefault();
        }
    })
})
function generateId(){
    let id = 0;
    return ++id;
}
function saveToLocalStorage(){
localStorage.setItem("textAreas", JSON.stringify(textAreas))
}

function updateTextAreas(){
const storedData = JSON.parse(localStorage.getItem("textAreas")) || [];
storedData.forEach(({id,value}) => {
    const tag = document.createElement('textarea');
    tag.value = value;
    noteContainer.appendChild(tag);
    textAreas.push({id, value})
});
}
updateTextAreas();
console.log("dcvfbghj")