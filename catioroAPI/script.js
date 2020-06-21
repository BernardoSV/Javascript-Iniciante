const btn = document.getElementById('btn');
const result = document.getElementById('catioroContainer');

btn.addEventListener('click', randomDog);

function randomDog(){
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
      // A api pode retornar um mp4 e como nosso html é <img> isso pode nos gerar problemas, então toda vez que nossa url incluir .mp4 a função randomDog vai ser executada.
			if(data.url.includes('.mp4')) {
				randomDog();
			}
			else {
				result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}