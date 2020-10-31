import React from 'react';

const Product = (props) => {
    // const {Name, ID} = props.product;
    const {addToCart, product} = props;

    return (
        <div style={{border: '2px solid red'}}>
            <h1>Name: {product.Name}</h1>
            <p>ID:{product.id}</p>
            
            <button 
                onClick={() => addToCart(product.id, product.Name)} 
            >Add to Cart</button>
        </div> 
    );
};

export default Product;