import { newElement, iconCreation } from "./utilities.js"
import imgFilosofia from "../images/conocenos/icono_filosofia.webp"
import imgFamilia from "../images/conocenos/icono_familia.webp"
import imgKM from "../images/conocenos/icono_km.webp"
import imgEco from "../images/conocenos/icono_eco.webp"
import imgPet from "../images/conocenos/icono_pet.webp"
import imgVegan from "../images/conocenos/icono_vegan.webp"
import imgGluten from "../images/conocenos/icono_gluten.webp"

const Conocenos = () => {
	const main_content = newElement("div")
	main_content.id = "main_content"

	const contentWrapper = newElement("div")
	contentWrapper.id = "contentWrapper"
	main_content.appendChild(contentWrapper)

	const sectionTitle = newElement("H1", "Nuestros valores")
	sectionTitle.classList.add("sectionTitle")
	contentWrapper.appendChild(sectionTitle)

	const valuesContainer = newElement("div")
	valuesContainer.classList.add("valuesContainer")
	contentWrapper.appendChild(valuesContainer)

	// VALORES
	// Filosofía
	const filosofiaContainer = newElement("div")
	filosofiaContainer.id = "filosofiaContainer"

	const iconFilosofia = iconCreation(imgFilosofia)
	const filosofiaTitle = newElement("h2", "Filosofía FIKA")
	const filosofiaText = newElement(
		"p",
		"La filosofía fika, proveniente del sueco, invita a tener un momento para ti y tomarse las cosas con calma, sea para descansar o socializar"
	)
	filosofiaContainer.appendChild(iconFilosofia)
	filosofiaContainer.appendChild(filosofiaTitle)
	filosofiaContainer.appendChild(filosofiaText)

	// Família

	const familiaContainer = newElement("div")
	familiaContainer.id = "familiaContainer"

	const iconFamilia = iconCreation(imgFamilia)
	const familiaTitle = newElement("h2", "Familia")
	const familiaText = newElement(
		"p",
		"Los clientes son familia y queremos transmitir este vínculo, sean pequeños o grandes, todos se tienen que sentir en casa"
	)
	familiaContainer.appendChild(iconFamilia)
	familiaContainer.appendChild(familiaTitle)
	familiaContainer.appendChild(familiaText)

	// KM
	const kmContainer = newElement("div")
	const kmContent = {
		id: "kmContainer",
		img: imgKM,
		title: "KM 0",
		text: "Desde FIKA nos hemos comprometido a trabajar con el comercio de proximidad y crecer de la mano de nuestros clientes/proveedores",
		parent: "kmContainer",
	}

	createValueContent(kmContent, kmContainer)

	valuesContainer.appendChild(filosofiaContainer)
	valuesContainer.appendChild(familiaContainer)
	valuesContainer.appendChild(kmContainer)

	return main_content
}

function createValueContent(objectContent, parent) {
	const Icon = iconCreation(objectContent["img"])
	const Title = newElement("h2", objectContent["title"])
	const Text = newElement("p", objectContent["text"])

	parent.appendChild(Icon)
	parent.appendChild(Title)
	parent.appendChild(Text)
}

//All icons
const iconEco = iconCreation(imgEco)
const iconPet = iconCreation(imgPet)
const iconVegan = iconCreation(imgVegan)
const iconGluten = iconCreation(imgGluten)

export { Conocenos }
