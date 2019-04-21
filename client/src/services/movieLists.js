/* eslint-disable */

import axios from 'axios'
const url = 'http://localhost:5050/movies/add/'

class movieLists{
    // get movies
    static getMovies(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url)
                const data = res.data
                resolve(data.map(movie => ({...movie})))
            } catch (err) {
                reject(err)
            }
        })
    }

    // add a movie!
    static insertMovie(name, director, rating){
        return axios.post(url, {
            name,
            director,
            rating
        })
    }

    // delete a movie
    static removeMovie(name){
        return axios.delete(`${url}${name}`)
    }

}

export default movieLists