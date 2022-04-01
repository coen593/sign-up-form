// Adds delay to each label letter
const labels = document.querySelectorAll('label')
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 25}ms">${letter}</span>`)
        .join('')
})

// Checks passwords
const passOne = document.querySelector('#pass')
const passTwo = document.querySelector('#confirmPass')
const fieldset = document.querySelector('fieldset:last-of-type')
const button = document.querySelector('.btn')
const error = document.querySelector('#errorWrapper')

const checkPasswords = (typing, filled) => {
    if (filled.value && typing.value) {
        if (filled.value === typing.value) {
            error.classList.remove('error')
            fieldset.classList.remove('error')
            button.disabled = false
        } else {
            error.classList.add('error')
            fieldset.classList.add('error')
            button.disabled=true
        }
    }
}

passTwo.addEventListener('input', () => checkPasswords(passTwo, passOne))
passOne.addEventListener('input', () => checkPasswords(passOne, passTwo))