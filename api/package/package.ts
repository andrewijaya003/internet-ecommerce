export function GetPackageByPT(id:any) {
	return fetch(`http://localhost:3000/packages?packageTypeId=${id}`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}

export function GetPackageById(id:any) {
	return fetch(`http://localhost:3000/packages?id=${id}`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}