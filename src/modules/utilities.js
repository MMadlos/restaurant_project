function newElement(element, textContent) {
	const newElement = document.createElement(element)
	if (element == "img") {
		newElement.textContent = ""
		return newElement
	}
	if (textContent) {
		newElement.textContent = textContent
	}

	return newElement
}

function iconCreation(imageImported) {
	const newImage = new Image()
	newImage.src = imageImported
	newImage.classList.add("iconValue")
	return newImage
}

export { newElement, iconCreation }
