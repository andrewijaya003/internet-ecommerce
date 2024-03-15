import { User } from "@/models/user/user"

export function GetUserByUsernameAndPassword({username, password}: {username:any, password:any}) {
	return fetch(`http://localhost:3000/users?username=${username}&password=${password}`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}

export function InsertUser(data:User) {
	return fetch(`http://localhost:3000/users`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	})
}