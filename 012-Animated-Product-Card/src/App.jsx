import React from 'react'
import './App.css'
import cocacolaLogo from "./assets/cocacola_logo.png"; 
import cocacolaBottle from "./assets/cocacola.png";
function App() {
  

  return (
    <>
      <div className="card">
      <div className="circle" style={{ "--clr": "#f40103" }}>
        <img src={cocacolaLogo} alt="Coca Cola Logo" className="logo" />
      </div>
      <div className="content">
        <h2>Coca-Cola</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus
          cumque magnam consequatur illum blanditiis nihil.
        </p>
        <a href="#">Explore more</a>
      </div>
      <img src={cocacolaBottle} alt="Coca Cola Bottle" className="product_img" />
    </div>
    </>
  )
}

export default App
