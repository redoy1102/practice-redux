import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {Name: 'Laptop', ID: 1},
        {Name: 'HP', ID: 2},
        {Name: 'Dell', ID: 3},
        {Name: 'Toshiba', ID: 4}
    ]
    return (
        <div>
            {
                products.map(pd => <Product product={pd} ></Product>)
            }
        </div>
    );
};

export default Shop;