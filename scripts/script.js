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