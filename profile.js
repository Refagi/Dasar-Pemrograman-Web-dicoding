const buttonType = document.createElement("a")
buttonType.textContent = 'click here'

const contentType = document.querySelector(".content-botton-typecat")
contentType.appendChild(buttonType)


const removeHidden = () => {
    const hiddenButton = document.querySelector(".type-cat")
    hiddenButton.removeAttribute('hidden');
}

buttonType.addEventListener('click', removeHidden)



const buttonHidden = document.createElement("a")
buttonHidden.textContent = 'Hidden Type cat'

const contentRemove = document.querySelector(".content-button-type-remove")
contentRemove.appendChild(buttonHidden)

const addHidden = () => {
    const addButton = document.querySelector(".type-cat")
    addButton.setAttribute('hidden', '')
}

buttonHidden.addEventListener('click', addHidden)