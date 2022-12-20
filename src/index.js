import "./styles.css"
import { Nav, footer, homeContent } from "./modules/home.js"
import { Conocenos } from "./modules/conocenos.js"
import { Carta } from "./modules/carta.js"

// Load default Home page
const inicio = homeContent()
const conocenos = Conocenos()
const carta = Carta()

const pageContent = document.getElementById("content")
pageContent.appendChild(Nav())
pageContent.appendChild(carta)
pageContent.appendChild(footer())

// Load content from other tabs
const tabCarta = document.getElementById("carta")
tabCarta.addEventListener("click", () => {
	loadContent(carta)
	tabCarta.classList.add("currentSection")

	tabInicio.classList.remove("currentSection")
	tabConocenos.classList.remove("currentSection")
})

const tabConocenos = document.getElementById("conocenos")
tabConocenos.addEventListener("click", () => {
	loadContent(conocenos)

	tabInicio.classList.remove("currentSection")
	tabConocenos.classList.add("currentSection")
})

const tabInicio = document.getElementById("inicio")
tabInicio.classList.add("currentSection")
tabInicio.addEventListener("click", () => {
	loadInicio()
})

const logo = document.getElementById("logo")
logo.addEventListener("click", () => {
	loadInicio()
})

function loadInicio() {
	loadContent(inicio)

	tabInicio.classList.add("currentSection")
	tabConocenos.classList.remove("currentSection")
}

function loadContent(sectionName) {
	const mainContent = document.getElementById("main_content")
	mainContent.remove()

	const nav = document.getElementById("nav_wrapper")
	nav.after(sectionName)
}
