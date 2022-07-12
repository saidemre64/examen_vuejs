import axios from 'axios'

const apiclient = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getMovies() {
        return apiclient.get('/api/movies')
    },
    getMovie(id) {
        return apiclient.get('/api/movies/' + id)
    },
    addVote(id) {
        return apiclient.put('api/movies', {id: id})
    }
}