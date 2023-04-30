import { useState } from 'react'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

function App() {

  //Van a hacer los prductos que se van a ir añadiendo al carrito
  const [allProducts, setAllProducts] = useState([])
  //Total
  const [total, setTotal] = useState(0)
  //Contador de productos
  const [countProducts, setCountProducts] = useState(0)

  return(
    <>
    <Header 
    allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}
    />
    <ProductList
    allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}
    />
    <Footer/>


    </>
  )
 
}

export default App
