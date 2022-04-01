// Adds delay to each label letter
const labels = document.querySelectorAll('label')
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 25}ms">${letter}</span>`)
        .join('')
})
