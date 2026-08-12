import { Link } from 'react-router-dom'

function Products() {

  const products = [
    {
      name: "OnePlus",
      price: "₹35,999",
      category: "Smartphone"
    },
    {
      name: "Samsung",
      price: "₹42,999",
      category: "Smartphone"
    },
    {
      name: "iPhone",
      price: "₹69,999",
      category: "Smartphone"
    },
    {
      name: "Motorola",
      price: "₹24,999",
      category: "Smartphone"
    },
    {
      name: "Redmi",
      price: "₹18,999",
      category: "Smartphone"
    }
  ]

  return (
    <div className="container">

      <h1>Our Products</h1>

      <div className="products-grid">

        {products.map((product) => (

          <div className="product-card" key={product.name}>

            <div className="product-icon">
              📱
            </div>

            <h2>{product.name}</h2>

            <p>{product.category}</p>

            <h3>{product.price}</h3>

            <Link
              to={`/products/${product.name.toLowerCase()}`}
              className="button"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Products