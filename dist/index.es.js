/**
 * Select whole text of an element
 * @param element {Node}
 */
function selectElementText(element) {
    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
}
/**
 * Select some text inside an element
 * @param element {Node}
 * @param selectedText {string}
 */
function selectText(element, selectedText) {
    // select element containing the text which is required in order to select a substring
    this.selectElementText(element);
    var selection = document.getSelection();
    var range = document.createRange();
    var textNode = selection.anchorNode.firstChild || selection.anchorNode;
    range.selectNode(textNode);
    // remove previous selection
    selection.removeAllRanges();
    // select actual text
    var startIndex = textNode.textContent.indexOf(selectedText);
    var endIndex = startIndex + selectedText.length;
    range.setStart(textNode, startIndex);
    range.setEnd(textNode, endIndex);
    selection.removeAllRanges();
    selection.addRange(range);
}

export { selectElementText, selectText };
