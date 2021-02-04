
import {createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Product from './Components/Others/Product';
import Shipment from './Components/Shipment/Shipment';
export const CategoryContext = createContext();
function App() {
  const [category, setCategory] = useState('laptop');
  return (
    
    <CategoryContext.Provider value={[category, setCategory]}>
      <h1>Increment Value : {category} </h1>
     <Home/>
     <Header/>
     <Shipment/>
     <Product/>
    </CategoryContext.Provider>
  );
}

export default App;
