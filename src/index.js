import "./styles.css"
import { Nav, footer, homeContent } from "./modules/home.js"
import { Conocenos } from "./modules/conocenos.js"

// Load default Home page
const inicio = homeContent()
const conocenos = Conocenos()

const pageContent = document.getElementById("content")
pageContent.appendChild(Nav())
pageContent.appendChild(conocenos)
pageContent.appendChild(footer())

// Load content from other tabs
const tabConocenos = document.getElementById("conocenos")
tabConocenos.addEventListener("click", () => {
	loadContent(conocenos)

	tabInicio.classList.remove("currentSection")
	tabConocenos.classList.add("currentSection")
})

const tabInicio = document.getElementById("inicio")
tabInicio.classList.add("currentSection")
tabInicio.addEventListener("click", () => {
	loadContent(inicio)

	tabInicio.classList.add("currentSection")
	tabConocenos.classList.remove("currentSection")
})

function loadContent(sectionName) {
	const mainContent = document.getElementById("main_content")
	mainContent.remove()

	const nav = document.getElementById("nav_wrapper")
	nav.after(sectionName)
}
