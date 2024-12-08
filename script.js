function getRandomJoke() {
    const body = document.body;

    body.innerHTML = `<div class="loading">Loading a joke...</div>`;

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch a joke");
            }
            return response.json();
        })
        .then((joke) => {
            body.innerHTML = `
                <div class="joke-wrapper">
                    <img class="cartoon" src="images/istockphoto-1419044374-612x612.jpg" alt="cartoon emoji" />
                    <h2>Here's a Joke for You!</h2>
                    <p class="setup">${joke.setup}</p>
                    <p class="punchline">${joke.punchline}</p>
                    <button class="skip-button" onclick="getRandomJoke()">Next</button>
                </div>
            `;
        })
        .catch((error) => {
            body.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        });
}
getRandomJoke();