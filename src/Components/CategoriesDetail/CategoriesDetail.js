import React from 'react';

const CategoriesDetail = (props) => {
          const {name} = props.product;
          
           console.log(props);
          return (
                    <div>
                              <h4>This is CategoriesDetail </h4>
                              <p>Selected categories : {name}</p>
                    </div>
          );
};

export default CategoriesDetail;