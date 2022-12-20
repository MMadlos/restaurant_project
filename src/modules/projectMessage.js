import { newElement, iconCreation } from "./utilities.js"

const Message = () => {
	const messageContainer = newElement("div")
	messageContainer.id = "messageContainer"

	const divMessage = newElement("div")
	divMessage.id = "divMessage"

	const linkTheOdinProject = newElement("a", "The Odin Project")
	linkTheOdinProject.addEventListener("click", () => {
		window.open("https://www.theodinproject.com", "_blank").focus()
	})
	linkTheOdinProject.id = "linkTOP"

	const paragraphMessage = newElement("p", "Esta web es un proyecto para")

	const fikaParagraph = newElement("p", "y está inspirada en la web de")
	const linkFikaWeb = newElement("a", "FIKA")
	linkFikaWeb.id = "linkFika"
	linkFikaWeb.addEventListener("click", () => {
		window.open("https://fikabcn.com/", "_blank")
	})

	messageContainer.appendChild(divMessage)
	divMessage.appendChild(paragraphMessage)
	divMessage.appendChild(linkTheOdinProject)
	divMessage.appendChild(fikaParagraph)
	divMessage.appendChild(linkFikaWeb)

	return messageContainer
}

export { Message }
