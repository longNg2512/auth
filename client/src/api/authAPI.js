import * as constants from '../constants'

export function addUser(data) {
    return new Promise((resolve, reject) => {
        const url = constants.API_URL + `/api/auth/register`
        fetch(url, {
            method: constants.HTTP_CREATE_METHOD,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
