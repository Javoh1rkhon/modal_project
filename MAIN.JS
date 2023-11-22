let modalText = document.querySelector('.modal')
let modalWindow = document.querySelector('.modalWindow')
let content = document.querySelector('.content')
let content2 = document.querySelector('.content2')
let x = document.querySelector('.x')
let icons = document.querySelector('.icons')
let menu = document.querySelector('.bx')

modalText.addEventListener('click', () => {
    modalWindow.style.display = 'block'
    content.style.width = '100%'
    content.style.backgroundColor = 'silver'
    menu.style.display = 'none'
    modalText.style.filter = 'blur(2px)'
})
x.addEventListener('click', () => {
    modalWindow.style.display = 'none'
    content.style.width = '70%'
    content.style.backgroundColor = 'white'
    menu.style.display = 'block'
    modalText.style.filter = 'blur()'
})

content.addEventListener('click', (e) => {
    if (e.target === content) {
        modalWindow.style.display = 'none'
        content.style.backgroundColor = 'white'
        document.body.style.overflow = ''
    menu.style.display = 'block'
    modalText.style.filter = 'blur()'   
    }
})
content.addEventListener('click', (e) => {
    if (e.target === content) {
        content2.style.display = 'none'
        document.body.style.overflow = ''
    menu.style.display = 'block'
    content.style.filter = 'blur()'
    }
})

menu.addEventListener('click', () => {
    content2.style.display = 'block'
    menu.style.color.display = 'none'
    content2.style.right = '0'
    content.style.filter = 'blur(2px)'
})

icons.addEventListener('click', () => {
    content2.style.display = 'none'
    content2.style.right = '-456px'
    content.style.filter = 'blur()'
})