// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <ProductCard name="Laptop" price="100,000.00" img="https://picsum.photos/id/0/200/300"/>
      <ProductCard name="Phone" price="50,000.00" img="https://picsum.photos/id/20/200/300"/>
      <ProductCard name="PC" price="200,000.00" img="https://picsum.photos/id/30/200/300"/>
    </>
  )
}

export default App