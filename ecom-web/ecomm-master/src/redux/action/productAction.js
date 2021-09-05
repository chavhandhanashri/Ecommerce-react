import ProductService from '../../services/productService';
import { ALL_PRODUCT, COLOR, FEATURE_PRODUCT, MATERIAL } from '../constant/actionType';

export const getProductAction = () => {

    return (dispatch) => {
        ProductService.getProduct()
            .then(res => {
                dispatch(getProducts(res.data.products));
            })
            .catch()
    }
}

export const getFeaturedProductAction = () => {

    return (dispatch) => {
        ProductService.getFeaturedProduct()
            .then(res => {
                dispatch(getFeaturedProducts(res.data.featured));
            })
            .catch()
    }
}

export const getColorAction = () => {

    return (dispatch) => {
        ProductService.getColors()
            .then(res => {
                dispatch(getColors(res.data.colors));
            })
            .catch()
    }
}

export const getMaterialAction = () => {

    return (dispatch) => {
        ProductService.getMaterial()
            .then(res => {
                dispatch(getMaterials(res.data.material));
            })
            .catch()
    }
}

export const getProducts = (data)=> {
    return{
        type: ALL_PRODUCT,
        payload: data
    }
}

export const getFeaturedProducts = (data)=> {
    return{
        type: FEATURE_PRODUCT,
        payload: data
    }
}

export const getColors = (data)=> {
    return{
        type: COLOR,
        payload: data
    }
}

export const getMaterials = (data)=> {
    return{
        type: MATERIAL,
        payload: data
    }
}