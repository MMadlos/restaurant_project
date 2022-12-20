import "./styles.css"
import { Nav, footer, homeContent } from "./modules/home.js"
import { Conocenos } from "./modules/conocenos.js"
import { Carta } from "./modules/carta.js"
import { Message } from "./modules/projectMessage.js"

// Load default Home page
const inicio = homeContent()
const conocenos = Conocenos()
const carta = Carta()

const pageContent = document.getElementById("content")
pageContent.appendChild(Message())
pageContent.appendChild(Nav())
pageContent.appendChild(inicio)
pageContent.appendChild(footer())

// // Message
// const linkFikaWeb = document.getElementById("linkFika")
// linkFikaWeb.addEventListener("click", () => {
// 	window.open("https://fikabcn.com/", "_blank")
// })

// Tabs & logo
const tabInicio = document.getElementById("inicio").parentElement
tabInicio.classList.add("currentSection")
const tabCarta = document.getElementById("carta").parentElement
const tabConocenos = document.getElementById("conocenos").parentElement
const logo = document.getElementById("logo")
const clickableItems = [logo, tabInicio, tabCarta, tabConocenos]

// Main Content
const navSection = document.getElementById("nav_wrapper")

clickableItems.forEach((item) =>
	item.addEventListener("click", () => {
		const currentSectionClass = document.querySelector(".currentSection")
		currentSectionClass.classList.remove("currentSection")

		item === logo ? tabInicio.classList.add("currentSection") : item.classList.add("currentSection")

		const mainContent = document.getElementById("main_content")
		mainContent.remove()

		if (item === tabCarta) {
			navSection.after(carta)
		}

		if (item === tabConocenos) {
			navSection.after(conocenos)
		}

		if (item === tabInicio || item === logo) {
			navSection.after(inicio)
		}
	})
)
