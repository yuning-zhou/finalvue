/* eslint-disable */

import api from './api'

export default {
    getMovies (movies){
        return api().post('movies', movies);
    }
}