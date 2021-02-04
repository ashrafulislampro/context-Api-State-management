import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Shipment = () => {
          const category = useContext(CategoryContext);
          return (
                    <div style={{border: '1px solid gray'}}>
                              <h1>This is Shipment : {category}</h1>
                              <Categories ></Categories>
                    </div>
          );
};

export default Shipment;