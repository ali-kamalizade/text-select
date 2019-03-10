import {Selector, ClientFunction} from 'testcafe';

fixture('Demo').page('../demo.html');

test('can select whole element text', async test => {
	await test.click(Selector('#button1'));
	await test.expect(await getSelectedText()).eql('Hello world');

	await test.click(Selector('#button2'));
	await test.expect(await getSelectedText()).eql('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.');
});

test('can select some text of element', async test => {
	await test.click(Selector('#button3'));
	await test.expect(await getSelectedSubText('demo')).eql('demo');
});

async function getSelectedText(): Promise<string> {
	return (await selectElement()).trim();
}

async function getSelectedSubText(string: string): Promise<string> {
	return (await selectText(string)).trim();
}

const selectElement = ClientFunction(() => {
	return document.getSelection().focusNode.textContent;
});

const selectText = ClientFunction((selectedText: string) => {
	const selection = document.getSelection();
	const textNode = selection.anchorNode.firstChild || selection.anchorNode;
	const startIndex = textNode.textContent.indexOf(selectedText);
	if (startIndex === -1) {
		console.warn(selectedText + ' not found in element');
		return '';
	}
	const endIndex = startIndex + selectedText.length;
	return textNode.textContent.substring(startIndex, endIndex);
}, { dependencies: { } });
