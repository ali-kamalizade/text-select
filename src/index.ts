/**
 * Select whole text of an element
 * @param element {Node}
 */
export function selectElementText(element: Node) {
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
export function selectText(element: Node, selectedText: string) {
	// select element containing the text which is required in order to select a substring
	this.selectElementText(element);

	const selection = document.getSelection();
	const range = document.createRange();
	const textNode = selection.anchorNode.firstChild || selection.anchorNode;
	range.selectNode(textNode);
	// remove previous selection
	selection.removeAllRanges();
	// select actual text
	const startIndex = textNode.textContent.indexOf(selectedText);
	const endIndex = startIndex + selectedText.length;
	range.setStart(textNode, startIndex);
	range.setEnd(textNode, endIndex);
	selection.removeAllRanges();
	selection.addRange(range);
}
