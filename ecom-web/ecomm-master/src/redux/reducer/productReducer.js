import { ALL_PRODUCT, COLOR, FEATURE_PRODUCT, MATERIAL } from "../constant/actionType";

const initialState = {
    products: [],
    featuredProducts: [],
    colors: [],
    materials: []
};

export const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case ALL_PRODUCT : {
            return {
                ...state,
                products: action.payload,
            }
        }
        case FEATURE_PRODUCT : {
            return {
                ...state,
                featuredProducts: action.payload,
            }
        }
        case COLOR : {
            return {
                ...state,
                colors: action.payload,
            }
        }
        case MATERIAL : {
            return {
                ...state,
                materials: action.payload,
            }
        }
        default: {
            return {
                ... state
            }
        }
    }    
}    