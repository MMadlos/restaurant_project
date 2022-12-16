import { newElement } from "./utilities.js"

const Conocenos = () => {
	const valores = newElement("div")
	valores.id = "main_content"

	const iconFilosofia = newElement("i")
	const imgFilosofia = newElement("img")

	iconFilosofia.appendChild(imgFilosofia)
	imgFilosofia.src = "/src/images/conocenos/icono_filosofia.webp"
	// HeroImg.src = "/src/images/FIKA.webp"

	valores.appendChild(iconFilosofia)

	return valores
}

export { Conocenos }
