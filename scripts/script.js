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
// These lines write and erase letters like a typewriter
// This was taken from Codepen
// https://codepen.io/FelixLuciano/pen/PoqdMKP

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

// Landing page writer code ends

// Mouse hover events
// By default the gif plays
// When the user moves their mouse over the project the gif changes to an image
// The opacity is set to lower of the image
// There is a title and description of the project

let projects = document.getElementById("projects-section")

// Mouse hover
projects.addEventListener("mouseover", function(event) {
    // Getting the target and relatives
    let element = event.target
    let sibling = element.previousElementSibling
    let parent = event.target.parentElement
    let uncle = parent.previousElementSibling
    firstLink = element.childNodes[3]
    secondLink = element.childNodes[5]
        // Setting the various properties
    if (element.getAttribute("target") === "project-target") {
        // State set to static
        element.setAttribute("state", "static")
        sibling.setAttribute("data-state", "still")
        sibling.setAttribute("src", sibling.getAttribute("data-still"))
        sibling.setAttribute("style", "opacity: 0.2;")
        element.setAttribute("style", "color: black;")
        firstLink.setAttribute("style", "display: block;")
        secondLink.setAttribute("style", "display: block;")

    }
    // In case you hover over the title or links
    // Prevents that glitch
    else if (element.getAttribute("target") === "child-target") {
        element.setAttribute("state", "static")
        uncle.setAttribute("data-state", "still")
        uncle.setAttribute("src", uncle.getAttribute("data-still"))
        uncle.setAttribute("style", "opacity: 0.2;")
        parent.setAttribute("style", "color: black;")
        parent.childNodes[3].setAttribute("style", "display: block;")
        parent.childNodes[5].setAttribute("style", "display: block;")
    }
})

// Mouse out event
projects.addEventListener("mouseout", function(event) {
    let element = event.target
    let sibling = element.previousElementSibling
    let parent = event.target.parentElement
    let uncle = parent.previousElementSibling
    firstLink = element.childNodes[3]
    secondLink = element.childNodes[5]
    if (element.getAttribute("target") === "project-target") {
        // State set to animated
        element.setAttribute("state", "animated")
        sibling.setAttribute("data-state", "animate")
        sibling.setAttribute("src", sibling.getAttribute("data-animate"))
        sibling.setAttribute("style", "opacity: 1;")
        element.setAttribute("style", "color: transparent;")
        firstLink.setAttribute("style", "display: none;")
        secondLink.setAttribute("style", "display: none;")
    } else if (element.getAttribute("target") === "child-target") {
        element.setAttribute("state", "animated")
        uncle.setAttribute("data-state", "animate")
        uncle.setAttribute("src", uncle.getAttribute("data-animate"))
        uncle.setAttribute("style", "opacity: 1;")
        parent.setAttribute("style", "color: transparent;")
        parent.childNodes[3].setAttribute("style", "display: none;")
        parent.childNodes[5].setAttribute("style", "display: none;")
    }
})

// Click event does the same as the hover event
projects.addEventListener("click", function(event) {
    let element = event.target
    let sibling = element.previousElementSibling
    let parent = event.target.parentElement
    let uncle = parent.previousElementSibling
    firstLink = element.childNodes[3]
    secondLink = element.childNodes[5]
    if (element.getAttribute("state") === "animated") {
        element.setAttribute("state", "static")
        if (element.getAttribute("target") === "project-target") {
            sibling.setAttribute("data-state", "still")
            sibling.setAttribute("src", sibling.getAttribute("data-still"))
            sibling.setAttribute("style", "opacity: 0.2;")
            element.setAttribute("style", "color: black;")
            firstLink.setAttribute("style", "display: block;")
            secondLink.setAttribute("style", "display: block;")
        } else if (element.getAttribute("target") === "child-target") {
            uncle.setAttribute("data-state", "still")
            uncle.setAttribute("src", uncle.getAttribute("data-still"))
            uncle.setAttribute("style", "opacity: 0.2;")
            parent.setAttribute("style", "color: black;")
            parent.childNodes[3].setAttribute("style", "display: block;")
            parent.childNodes[5].setAttribute("style", "display: block;")
        }
    } else {
        element.setAttribute("state", "animated")
        if (element.getAttribute("target") === "project-target") {
            sibling.setAttribute("data-state", "animate")
            sibling.setAttribute("src", sibling.getAttribute("data-animate"))
            sibling.setAttribute("style", "opacity: 1;")
            element.setAttribute("style", "color: transparent;")
            firstLink.setAttribute("style", "display: none;")
            secondLink.setAttribute("style", "display: none;")
        } else if (element.getAttribute("target") === "child-target") {
            uncle.setAttribute("data-state", "animate")
            uncle.setAttribute("src", uncle.getAttribute("data-animate"))
            uncle.setAttribute("style", "opacity: 1;")
            parent.setAttribute("style", "color: transparent;")
            parent.childNodes[3].setAttribute("style", "display: none;")
            parent.childNodes[5].setAttribute("style", "display: none;")
        }
    }
})