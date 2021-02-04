import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Product = () => {
          const [category, setCategory] = useContext(CategoryContext);
          return (
                    <div>
                              <h1>This is Component</h1>
                              <button onClick={ () => setCategory(category + 1)}>Increment Show button</button>
                    </div>
          );
};

export default Product;