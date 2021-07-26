const $form = document.querySelector('#form');
const $url= 'https://60f250bb6d44f30017788625.mockapi.io/idkwidv1/';
const $img =document.querySelector('#rimage');
const $lis =document.querySelector('#imagen');


$lis.addEventListener('change', () => {
	const formdata = new FormData($form);
	const file = formdata.get('img');
	$img.setAttribute('src', file);
});

$form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formdata = {
		name: new FormData($form).get('name'),
		age: new FormData($form).get('age'),
		raza: new FormData($form).get('raza'),
		img: new FormData($form).get('img')
	} 

	console.log(JSON.stringify(formdata));
	fetch($url + 'perros', {
		method: 'POST',
		body: JSON.stringify(formdata),
		headers: {
			"Content-type": "application/json"
		}
	})
	prompt('Datos subidos correctamente')
})


