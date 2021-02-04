import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
          const category = useContext(CategoryContext);
          return (
                    <div>
                              <h1>This is home page : {category}</h1> 
                    </div>
          );
};

export default Home;