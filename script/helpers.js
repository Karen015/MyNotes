const tagCreator = (tagName, value, parent) => {
    const tag = document.createElement(tagName);
    console.log('asdadasda')
    tag.value = value;
    parent.appendChild(tag)
}

export {
    tagCreator
}