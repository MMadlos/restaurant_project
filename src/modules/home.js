import { newElement } from "./utilities.js"

const Nav = () => {
	const nav = newElement("nav")
	nav.id = "nav_wrapper"

	const logo = newElement("img")
	logo.src = "/src/images/logo.png"
	logo.alt = "logo"

	const ul = newElement("ul")

	const inicio = newElement("a", "Inicio")
	inicio.id = "inicio"

	const carta = newElement("a", "Carta")
	carta.id = "carta"

	const conocenos = newElement("a", "Conócenos")
	conocenos.id = "conocenos"

	ul.appendChild(newElement("li")).appendChild(inicio)
	ul.appendChild(newElement("li")).appendChild(carta)
	ul.appendChild(newElement("li")).appendChild(conocenos)

	const icons = newElement("div")
	icons.id = "icons"

	icons.appendChild(newElement("p", "O"))
	icons.appendChild(newElement("p", "O"))

	nav.appendChild(logo)
	nav.appendChild(ul)
	nav.appendChild(icons)
	return nav
}
const footer = () => {
	const footer = newElement("footer")

	footer.appendChild(newElement("p", "Contacto"))
	footer.appendChild(newElement("p", "Calle Rubén Darío 36, 08030, Barcelona"))
	footer.appendChild(newElement("p", "fikacoffeecorner@gmail.com"))
	footer.appendChild(newElement("p", "fikacoffeebcn"))

	return footer
}

const homeContent = () => {
	const divMainContent = newElement("div")
	divMainContent.id = "main_content"

	const HeroImg = newElement("img", "test")
	HeroImg.src = "/src/images/FIKA.webp"
	HeroImg.id = "hero_img"

	divMainContent.appendChild(HeroImg)

	return divMainContent
}

export { Nav, footer, homeContent }
