export const generateUserInstructions = (sentences) => {
	let instruction = []
	for (let i = 0; i < sentences.length; i++) {
		instruction.push(sentences[i])

		//hindi viram chinh
		instruction.push('।')
	}

	return instruction.join('')
}
