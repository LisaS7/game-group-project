const baseURL = 'http://localhost:5000/api/highscores/'

export const getHighscores = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postHighscores = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const updateHighscore = (payload, id) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
