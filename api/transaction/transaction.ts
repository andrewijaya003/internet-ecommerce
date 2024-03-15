import { Transaction } from "@/models/transaction/transaction"

export function GetTransactionByUserId(id:any) {
	return fetch(`http://localhost:3000/transactions?userId=${id}`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'GET'
	})
}

export function InsertTransaction(data:Transaction) {
	return fetch(`http://localhost:3000/transactions`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	})
}