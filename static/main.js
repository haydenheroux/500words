const entryElement = document.getElementById("entry")
const submitElement = document.getElementById("submit")
const wcElement = document.getElementById("wc")

function wordCount(str) {
	if (str === "") {
		return 0
	}

	const words = str.split(" ")
	return words.length
}

function post() {
	const text = entryElement.value

	const body = {
		text: text
	}

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	}

	// Post text to the server
	fetch("/", options).then(data => {
		if (!data.ok) {
			throw Error(data.status)
		}
		return data.json()
	}).then(response => {
		if (response.ok == false) {
			// TODO Report error to user via the interface
			console.log(response)
		}
	}).catch(e => {
		// TODO Report error to user via the interface
		console.log(e)
	})

	// Update the word count
	wcElement.innerText = `${wordCount(text)}/500`
}

submitElement.onclick = post
entryElement.onkeyup = post

// Automatically execute the post request on page load
// This captures existing data and ensures the word count is accurate 
post()
