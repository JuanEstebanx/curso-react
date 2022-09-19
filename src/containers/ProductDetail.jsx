import React from "react";
//import ProductInfo
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src="./sadsa" alt="close"/>
            </div>
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;