// Landing Page

// Landing Button

let landingButton = document.getElementById("landing-button")

landingButton.addEventListener("click", function() {
    window.location.hash = "header"
})

// Projects Button

let projectsButton = document.getElementById("projects-button")

projectsButton.addEventListener("click", function() {
    window.location.hash = "projects-section"
})

// Landing Page Writer

const elementNode = document.getElementById('type-text')
let text = ''

function updateNode() {
    elementNode.innerText = text
}

function pushCharacter(character) {
    text += character
    updateNode()
}

function popCharacter() {
    text = text.slice(0, text.length - 1)
    updateNode()
}

function clearText() {
    text = ''
    updateNode()
}


function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

function typeCharacter(character) {
    return new Promise(resolve => {
        const randomMsInterval = 125 * Math.random()
        const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval

        pushCharacter(character)
        wait(msInterval).then(resolve)
    })
}

function removeCharacter() {
    return new Promise(resolve => {
        const randomMsInterval = 125 * Math.random()
        const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval

        popCharacter()
        wait(msInterval).then(resolve)
    })
}

function typeText(text) {
    return new Promise(resolve => {
        function _type(index) {
            typeCharacter(text[index]).then(() => {
                if (index + 1 < text.length) _type(index + 1)
                else resolve()
            })
        }
        _type(0)
    })
}

function removeText(amount) {
    return new Promise(resolve => {
        function _remove(index) {
            removeCharacter().then(() => {
                if (index + 1 < amount) _remove(index + 1)
                else resolve()
            })
        }
        _remove(0)
    })
}

function typeLoop() {
    typeText("Hello, I'm Dustin.")
        .then(() => wait(2000))
        .then(() => removeText(20))
        .then(() => typeText("I'm a Full Stack Web Developer."))
        .then(() => wait(2000))
        .then(() => removeText(32))
        .then(() => typeText("Welcome to my Portfolio."))
        .then(() => wait(2000))
        .then(() => removeText(24))
        .then(typeLoop)
}

typeLoop()

// This animates the gifs on hover

let projects = document.getElementById("projects-section")

projects.addEventListener("mouseover", function(event) {
    let element = event.target
    if (element.matches('img')) {
        element.setAttribute("data-state", "animate")
        element.setAttribute("src", element.getAttribute("data-animate"))
    }
})
projects.addEventListener("mouseout", function(event) {
    let element = event.target
    if (element.matches('img')) {
        element.setAttribute("data-state", "still")
        element.setAttribute("src", element.getAttribute("data-still"))
    }
})