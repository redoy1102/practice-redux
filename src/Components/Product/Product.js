import React from 'react';

const Product = (props) => {
    const {Name, ID} = props.product;
    return (
        <div style={{border: '2px solid red'}}>
            <h1>Name: {Name}</h1>
            <p>ID:{ID}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;