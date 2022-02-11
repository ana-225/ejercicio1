// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
// import FirstPage from './Componentes/FirstPage'
// import FirsPage from "./Componentes/FirstPage"

function App() {
  const[description, setdescription] = useState([]);

  const initialUrl = "http://54.203.82.32:3000/api/productos/producto/26"

  const fetchProduct = (initialUrl)=>{
    fetch(initialUrl)
    .then(response => response.json())
    .then(data => setdescription(data.producto))
    .catch(error => console.log(error))
    console.log(fetchProduct)
  };

  useEffect(() => {
    fetchProduct(initialUrl);
  }, [])
  return (
    <>
    <div className="App">
    
    <h2>
      {
        description.map(item => (
          <h2 key = {description.producto}>{item.nombre}</h2>
        ))
      }
    </h2>
    <h5>Detalles</h5>
    <div className='box-product'>
      <img src= "http://54.203.82.32:3000/api/productos/img/pd2-3-000002-001.jpg" alt='' width='200px'/>
    </div>

    </div>
   </> 
 );
}

export default App;
