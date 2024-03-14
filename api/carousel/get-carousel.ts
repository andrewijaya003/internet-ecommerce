export default function GetAllCarousel() {
	return fetch(`${process.env.BE_URL}/slides`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}