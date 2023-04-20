const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Click tht btn and run generateJoke func
jokeBtn.addEventListener('click', generateJoke);

// Run a fnc generates jokes
generateJoke()

// Using Async/Await
async function generateJoke() {
  // Put the hearder (obj) in a variable to make it cleaner
  const config = {
    headers: {
      'Accept' : 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()
  jokeEl.innerHTML = data.joke
}


// Using .then()
// function generateJoke() {
//   // Put the hearder (obj) in a variable to make it cleaner
//   const config = {
//     headers: {
//       'Accept' : 'application/json'
//     }
//   }
//   fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then((data) => {
//       //Insort jokes from data in the element
//       jokeEl.innerHTML = data.joke
//     })
// }
