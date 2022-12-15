//DOM Creation

function newP(text) {
	const paragraph = document.createElement("p")
	paragraph.textContent = text
	return paragraph
}

function newLi() {
	const li = document.createElement("li")
	return li
}

function newA(text, href, id) {
	const a = document.createElement("a")
	a.textContent = text
	a.href = href
	id ? (a.id = id) : ""

	return a
}

function newDiv(text, id) {
	const div = document.createElement("div")
	div.textContent = text
	id ? (div.id = id) : ""
	return div
}

//HOME Creation

const Nav = () => {
	const nav = document.createElement("nav")
	nav.setAttribute("id", "nav_wrapper")

	const logo = document.createElement("img")
	logo.src = "/src/images/logo.png"
	logo.alt = "logo"

	const ul = document.createElement("ul")
	const inicio = newA("Inicio", "#")
	const carta = newA("Carta", "#")
	const conocenos = newA("Conócenos", "#")

	ul.appendChild(newLi()).appendChild(inicio)
	ul.appendChild(newLi()).appendChild(carta)
	ul.appendChild(newLi()).appendChild(conocenos)

	const icons = newDiv("", "icons")
	icons.appendChild(newDiv("O"))
	icons.appendChild(newDiv("O"))

	nav.appendChild(logo)
	nav.appendChild(ul)
	nav.appendChild(icons)
	return nav
}

const heroImg = document.createElement("img")
heroImg.src = "/src/images/FIKA.webp"
heroImg.id = "hero_img"

const footer = document.createElement("footer")
footer.appendChild(newP("Contacto"))
footer.appendChild(newP("Calle Rubén Darío 36, 08030, Barcelona"))
footer.appendChild(newP("fikacoffeecorner@gmail.com"))
footer.appendChild(newP("fikacoffeebcn"))

const Home = () => {
	const home = document.getElementById("content")

	home.appendChild(Nav())
	home.appendChild(heroImg)
	home.appendChild(footer)
}

export { Home }
