import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';
const allProducts = [{name: 'Asus', category: 'laptop'},{name: 'HP', category: 'laptop'},{name: 'Dell', category: 'laptop'},
                    {name: 'Nokia', category: 'Mobile'},{name: 'Samsung', category: 'Mobile'},{name: 'Xiaomi', category: 'Mobile'},
                    {name: 'Canon', category: 'Camera'},{name: 'Nikko', category: 'Camera'},{name: 'Sony', category: 'Camera'},         

           ]
const Categories = () => {
          const [category] = useContext(CategoryContext);
          const [products, setProducts] = useState([]);
          useEffect(() =>{
                    const matchedProducts = allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
                    setProducts(matchedProducts);
          },[category])
          return (
                    <div>
                              <h2>This is Categories : {category}</h2>
                              {
                                        products.map(product => <CategoriesDetail product={product}></CategoriesDetail>)
                              }
                    </div>
          );
};

export default Categories;