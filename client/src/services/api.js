// source adapted from freeCodeCamp.org
/* eslint-disable */

import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: `http://localhost:5050`
    })
}
