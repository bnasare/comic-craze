const jokeElement = document.getElementById('joke');
const btn = document.getElementById('btn');

fetchJoke();

async function fetchJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const response = await fetch('https://icanhazdadjoke.com/', config);
    const data = await response.json();
    jokeElement.innerHTML = data.joke;
}

btn.addEventListener('click', fetchJoke);