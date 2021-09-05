import axios from 'axios';

const BASE_URL = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/"

function ProductService() {

    // Changed earlier get call with post
    this.getProduct = () => axios.get(BASE_URL + "products");
    this.getFeaturedProduct = () => axios.get(BASE_URL + "featured");
    this.getColors = () => axios.get(BASE_URL + "colors");
    this.getMaterial = () => axios.get(BASE_URL + "material");
}

export default new ProductService();