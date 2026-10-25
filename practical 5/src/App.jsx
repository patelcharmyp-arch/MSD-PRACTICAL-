
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [method, setMethod] = useState('Fetch')

  const api = 'https://fakestoreapi.com/products'

  // Fetch API
  const fetchProducts = async () => {
    setLoading(true)
    setMethod('Fetch')

    try {
      const response = await fetch(api)
      if (!response.ok) throw new Error('Failed to load products')

      const data = await response.json()
      setProducts(data)
    } catch (error) {
      alert('Products load nathi thata. Internet check karo.')
    } finally {
      setLoading(false)
    }
  }

  // Axios API
  const axiosProducts = async () => {
    setLoading(true)
    setMethod('Axios')

    try {
      const response = await axios.get(api)
      setProducts(response.data)
    } catch (error) {
      alert('Products load nathi thata. Internet check karo.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="app">
      <header>
        <h1>🛍️ Product Store</h1>
        <p>Explore Our Products</p>
      </header>

      <div className="buttons">
        <button onClick={fetchProducts}>Fetch API</button>
        <button onClick={axiosProducts}>Axios API</button>
      </div>

      <h3 className="loading">
        {loading ? 'Loading Products...' : `Data loaded using ${method} API`}
      </h3>

      {!loading && (
        <div className="products">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />

              <h3>{product.title}</h3>

              <p className="price">
                ₹{(product.price * 85).toFixed(2)}
              </p>

              <p>⭐ {product.rating?.rate ?? 'N/A'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
