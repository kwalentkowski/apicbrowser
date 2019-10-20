import axios from 'axios'

const instance = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})

export const getImagesByKeyword = (keyword: string ='') => {
    return instance.get(`http://localhost:5000/api/images/${keyword}`)
}