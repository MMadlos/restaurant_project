import "./styles.css"
import { Nav, footer, homeContent } from "./modules/home.js"
import { Conocenos } from "./modules/conocenos.js"

const pageContent = document.getElementById("content")

pageContent.appendChild(Nav())

// Cuando haga click en el enlace "Conócenos", quiero que se borre el contenido de Content y aparezca el contenido de "Conócenos"
pageContent.appendChild(homeContent())

const tabConocenos = document.getElementById("conocenos")

tabConocenos.addEventListener("click", () => {
	const heroImg = document.getElementById("hero_img")
	heroImg.remove()

	const nav = document.getElementById("nav_wrapper")
	nav.after(Conocenos())
})

pageContent.appendChild(footer())
