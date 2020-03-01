var joke = document.getElementById('joke');

fetch('https://icanhazdadjoke.com/slack')
    .then((response) => {
        return response.json();
    })
    .then(data=>{
        console.log(data.attachments[0].fallback);
        joke.innerHTML = data.attachments[0].fallback;
    });
    