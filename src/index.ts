/**
 * Select whole text of an element
 * @param element {Node}
 */
export function selectElementText(element: Node): void {
	const selection = document.getSelection();
	const range = document.createRange();
	range.selectNodeContents(element);
	selection.removeAllRanges();
	selection.addRange(range);
}

/**
 * Select some text inside an element
 * @param element {Node}
 * @param selectedText {string}
 */
export function selectText(element: Node, selectedText: string): void {
	// select element containing the text which is required in order to select a substring
	selectElementText(element);

	const selection = document.getSelection();
	const range = document.createRange();
	const textNode = selection.anchorNode.firstChild || selection.anchorNode;
	range.selectNode(textNode);
	// remove previous selection
	selection.removeAllRanges();
	// select actual text
	const startIndex = textNode.textContent.indexOf(selectedText);
	if (startIndex === -1) {
		console.warn(selectedText + ' not found inside element', element);
		return;
	}
	const endIndex = startIndex + selectedText.length;
	range.setStart(textNode, startIndex);
	range.setEnd(textNode, endIndex);
	selection.removeAllRanges();
	selection.addRange(range);
}

/**
 * Get text of selected element
 */
export function getSelectedElementText() {
	return document.getSelection().focusNode.textContent;
}

/**
 * Get selected text inside an element
 * @param selectedText {string}
 */
export function getSelectedText(selectedText: string) {
	const selection = document.getSelection();
	const textNode = selection.anchorNode.firstChild || selection.anchorNode;
	const startIndex = textNode.textContent.indexOf(selectedText);
	if (!selectedText || startIndex === -1) {
		console.warn(selectedText + ' not found in element', textNode);
		return '';
	}
	const endIndex = startIndex + selectedText.length;
	return textNode.textContent.substring(startIndex, endIndex);
}