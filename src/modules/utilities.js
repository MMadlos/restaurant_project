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

export { newElement }
