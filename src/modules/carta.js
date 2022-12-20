import { newElement, iconCreation } from "./utilities.js"
import imgVegan from "../images/conocenos/icono_vegan.webp"

function createItem(name, description, price, image, src = null) {
	this.name = name
	this.description = description
	this.price = price
	this.image = image
	this.src = src

	return { name, description, price, image, src }
}

const itemsBocadillosFactory = [
	new createItem("Jamón Ibérico", "", 3.7, false),
	new createItem("Fuet", "", 3.2, false),
	new createItem("Jamón de Pavo", "", 3, false),
	new createItem("Bikini", "", 3.2, false),
	new createItem("Aguacate", "con tomate, rúcula y cebolla crunchy", 3.9, true),
	new createItem("Queso de Cabra", "con rúcula, miel y nueces", 3.9, false),
	new createItem("Salmón", "con guacamole o queso crema", 4.1, false),
	new createItem("Queso Brie", "con cebolla caramelizada", 4, false),
	new createItem("Heura", "con tomate, rúcula y cebolla crunchy", 4.1, true),
]
const Carta = () => {
	const mainContent = newElement("section")
	mainContent.id = "main_content"

	const header = newElement("h1", "La carta de FIKA")
	header.classList.add("sectionTitle")
	mainContent.appendChild(header)

	const divBocadillos = newElement("div")
	divBocadillos.classList.add("contenedorTodasCartas")

	const divListaBocadillos = newElement("div")
	divListaBocadillos.classList.add("contenedorCarta")

	const divListaTostadas = newElement("div")
	const divListaExtras = newElement("div")

	mainContent.appendChild(divBocadillos)
	divBocadillos.appendChild(divListaBocadillos)
	divBocadillos.appendChild(divListaTostadas)
	divBocadillos.appendChild(divListaExtras)

	const titleBocadillos = newElement("h2", "Bocadillos")
	const subtitleBocadillos = newElement("p", "(Todos nuestros bocadillos están hechos con pan de coca artesano)")

	divListaBocadillos.appendChild(titleBocadillos)
	divListaBocadillos.appendChild(subtitleBocadillos)

	function createListaCarta(objectContent) {
		const listaContainer = newElement("div")
		listaContainer.classList.add("listaContainer")

		objectContent.map((items) => {
			const itemContainer = newElement("div")
			itemContainer.classList.add("itemContainer")

			const namePriceContainer = newElement("div")
			namePriceContainer.classList.add("namePriceContainer")
			itemContainer.appendChild(namePriceContainer)

			const itemName = newElement("p", items.name)
			itemName.classList.add("itemName")
			namePriceContainer.appendChild(itemName)

			// const dots = newElement("div")
			// dots.classList.add("dots")
			// namePriceContainer.appendChild(dots)

			if (items.description !== "") {
				const itemDescription = newElement("p", items.description)
				itemDescription.classList.add("itemDescription")
				itemContainer.appendChild(itemDescription)
			}

			const priceContainer = newElement("div")
			priceContainer.classList.add("priceContainer")
			namePriceContainer.appendChild(priceContainer)

			const itemPrice = newElement("p", items.price.toFixed(2))
			itemPrice.classList.add("itemPrice")
			priceContainer.appendChild(itemPrice)

			if (items.image === true) {
				const iconVegan = iconCreation(imgVegan)
				iconVegan.classList.add("iconVegan")
				priceContainer.appendChild(iconVegan)
			}

			listaContainer.appendChild(itemContainer)
		})

		divListaBocadillos.appendChild(listaContainer)
	}

	createListaCarta(itemsBocadillosFactory)

	return mainContent
}

export { Carta }
