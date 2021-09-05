import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import FilterPanel from "../../shared/filter/filter";
import Navbar from '../../shared/navbar/navbar';
import "./product.css";
import {
  getColorAction,
  getFeaturedProductAction,
  getMaterialAction,
  getProductAction,
} from "../../redux/action/productAction";

let productInCart = [];

export default function Product() {
  const dispatch = useDispatch();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [addedProduct, setAddedProduct] = useState(0);

  let products = useSelector((state) => {
    return state.product.products;
  });

  let colors = useSelector((state) => {
    return state.product.colors;
  });

  let materials = useSelector((state) => {
    return state.product.materials;
  });

  useEffect(() => {
    async function getProductDetail() {
      dispatch(getProductAction());
      dispatch(getFeaturedProductAction());
      dispatch(getColorAction());
      dispatch(getMaterialAction());
    }
    getProductDetail();
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setVisibleProducts(products);
    }
  }, [products]);

  let featureProducts = useSelector((state) => {
    return state.product.featuredProducts;
  });

  const selectedFilter = (type, id) => {
    let visibleProductsArray = [];
    if (type === 'color') {
      visibleProductsArray = products.filter(ele => ele?.colorId === id);
    } else if (type === 'material'){
      visibleProductsArray = products.filter(ele => ele?.materialId === id);
    }
    setVisibleProducts(visibleProductsArray);
  }

  const getProductDetail = (type, id) => {
    let productDetail;
    if (type == 'color') {
      productDetail = colors.find(ele => ele?.id == id)?.name;
    } else {
      productDetail = materials.find(ele => ele?.id == id)?.name;
    }
    return productDetail;
  }

  const onNavClick = (type) => {
    if (type === 'all') {
      setVisibleProducts(products);
    } else if (type === 'featured') {
      let visibleProducts = [];
      products.map(ele => {
        for (let index = 0; index < featureProducts.length; index++) {
          ele.id === featureProducts[index].productId ? visibleProducts.push(ele) : void(0)          
        }
      })
      setVisibleProducts(visibleProducts);
    }
  }

  const addToCart = (product) => {
    if (!productInCart.includes(product)) {
      productInCart.push(product);
    }
    setAddedProduct(productInCart.length);
  }
  return (
    <>
      <Navbar
        onNavClick = {onNavClick} //child to parent
        addedProduct = {addedProduct} // parent to child
      />
      <div className="row">
        <div className="col mt-5 mb-5 pt-5" style={{ maxWidth: "20%" }}>
          <FilterPanel 
            colors = {colors}
            materials = {materials}
            selectedFilter = {selectedFilter}
          />
        </div>
        <div className="col zero-border pt-5" style={{ maxWidth: "80%" }}>
          <Card className={`mx-5 mt-4 mb-5`}>
            <Typography
              className="px-4 mx-3"
              variant="h6"
              id="tableTitle"
              component="div"
              STYLE="font-weight:bold"
            >
            </Typography>
            <div className="row py-4">
              {visibleProducts.map((product) => (
                <div className="col-4">
                  <CardActionArea>
                    <div onClick={() => addToCart(product)} className="image-div">
                      <img src={product?.image} className="product-img" />
                    </div>
                  </CardActionArea>
                  <CardContent className="text-left px-4">
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        <span className="name-cls">{product?.name}</span>
                        <div className="row">
                          <span className="name-cls col-auto">{getProductDetail('color', product?.colorId)}</span>
                          <span className="name-cls col">{getProductDetail('material', product?.materialId)}</span>
                        </div>
                        <span className="name-cls">INR {product?.price}</span>
                      </Typography>
                    </CardContent>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 plr5 m0">
                    <CardActions></CardActions>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

// let createdBoxes = []
// for(let el=0; el<this.counter; el++ )
//                                   createdBoxes.push(<Box />)