export function GetAllSlide() {
	return fetch(`http://localhost:3000/slides`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}