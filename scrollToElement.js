function scrollToElement() {
    const about = document.getElementById("About")
    const projects = document.getElementById("Projects")
    const contact = document.getElementById("Contact")

    if (event.target.name === "learn more") {
        about.scrollIntoView({behavior:"smooth"})
    } else if (event.target.name === "About") {
        about.scrollIntoView({ behavior: "smooth" })
    } else if (event.target.name === "Projects") {
        projects.scrollIntoView({ behavior: "smooth" })
    } else if (event.target.name === "Contact"){
        console.log(event.target.name)
        contact.scrollIntoView({behavior: "smooth", block: "start"})
    }
}   