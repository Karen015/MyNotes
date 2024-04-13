import { tagCreator } from "./helpers.js";
import { noteCreatBtn, noteContainer } from "./constant.js";


noteCreatBtn.addEventListener('click', () => {
    const tag = document.createElement('textarea');
    tag.setAttribute('placeholder', 'Some text...')
    noteContainer.appendChild(tag)
})

