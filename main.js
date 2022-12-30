const entryElement = document.getElementById("entry")
const submitElement = document.getElementById("submit")
const wcElement = document.getElementById("wc")

function wordCount(str) {
	if (str === "") {
		return 0
	}

	let words = str.split(" ")
	return words.length
}

submitElement.onclick = () => {
	let text = entryElement.value

	// Post text to the server

	// Update the word count
	wcElement.innerText = `${wordCount(text)}/500`
}

// Automatically execute the onclick handler on page load
// This captures existing data and ensures the word count is accurate 
submitElement.onclick()
