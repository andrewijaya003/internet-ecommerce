export function GetAllPackageType() {
	return fetch(`http://localhost:3000/packageTypes`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}

export function GetPackageTypeByID(id:any) {
	return fetch(`http://localhost:3000/packageTypes?id=${id}`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}