import axios from "axios";

export default {
    GET_PRODUCT_FROM_API({commit}){
        const url = 'http://localhost:6000/products'
        return axios(url, {
            method: 'GET'
        })
            .then(products => {
                commit('SET_TO_PRODUCTS_STATE', products.data)
                return products
            })
            .catch(e => {
                console.log(e)
                return e
            })
    }
}