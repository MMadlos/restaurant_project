import { newElement, iconCreation } from "./utilities.js"
import imgFilosofia from "../images/conocenos/icono_filosofia.webp"
import imgFamilia from "../images/conocenos/icono_familia.webp"
import imgKM from "../images/conocenos/icono_km.webp"
import imgEco from "../images/conocenos/icono_eco.webp"
import imgPet from "../images/conocenos/icono_pet.webp"
import imgVegan from "../images/conocenos/icono_vegan.webp"
import imgGluten from "../images/conocenos/icono_gluten.webp"

const allValuesContent = {
	filosofia: {
		img: imgFilosofia,
		title: "Filosofía FIKA",
		text: "La filosofía fika, proveniente del sueco, invita a tener un momento para ti y tomarse las cosas con calma, sea para descansar o socializar",
	},
	familia: {
		img: imgFamilia,
		title: "Familia",
		text: "Los clientes son familia y queremos transmitir este vínculo, sean pequeños o grandes, todos se tienen que sentir en casa",
	},
	km: {
		img: imgKM,
		title: "KM 0",
		text: "Desde FIKA nos hemos comprometido a trabajar con el comercio de proximidad y crecer de la mano de nuestros clientes/proveedores",
	},
	eco: {
		img: imgEco,
		title: "Eco-sostenible",
		text: "Ponemos nuestro granito de arena para reducir los residuos de plástico en FIKA y ayudar a mantener limpio el medio ambiente",
	},
	pet: {
		img: imgPet,
		title: "Pet friendly",
		text: "A nuestra familia no pueden faltar los más peludos, aquí siempre tendrán un lugar para disfrutar GUAU!",
	},
	vegan: {
		img: imgGluten,
		title: "Para todos",
		text: "Nuestro sello de calidad es para todos los que quieran disfrutar de nuestro producto, con opciones veganas y sin gluten",
	},
}

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

	function createValueContent(objectContent) {
		const Container = newElement("div")
		Container.id = `${objectContent}Container`

		const Icon = iconCreation(allValuesContent[objectContent]["img"])
		const Title = newElement("h2", allValuesContent[objectContent]["title"])
		const Text = newElement("p", allValuesContent[objectContent]["text"])

		Container.appendChild(Icon)
		Container.appendChild(Title)
		Container.appendChild(Text)

		valuesContainer.appendChild(Container)
	}

	Object.keys(allValuesContent).forEach((key) => {
		createValueContent(key)
	})

	return main_content
}

export { Conocenos }
