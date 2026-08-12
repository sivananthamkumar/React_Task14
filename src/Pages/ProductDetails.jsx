import { useParams, Link } from 'react-router-dom'

function ProductDetails() {

  const { productName } = useParams()

  const products = {
    oneplus: {
      name: "OnePlus",
      brand: "OnePlus",
      price: "₹35,999",
      availability: "In Stock",
      category: "Smartphone",
      description:
        "OnePlus smartphone with powerful performance, fast charging and a smooth display."
    },

    samsung: {
      name: "Samsung",
      brand: "Samsung",
      price: "₹42,999",
      availability: "In Stock",
      category: "Smartphone",
      description:
        "Samsung smartphone with an excellent display, powerful camera and reliable performance."
    },

    iphone: {
      name: "iPhone",
      brand: "Apple",
      price: "₹69,999",
      availability: "In Stock",
      category: "Smartphone",
      description:
        "iPhone with powerful performance, premium design and an advanced camera system."
    },

    motorola: {
      name: "Motorola",
      brand: "Motorola",
      price: "₹24,999",
      availability: "In Stock",
      category: "Smartphone",
      description:
        "Motorola smartphone offering clean software, good performance and long battery life."
    },

    redmi: {
      name: "Redmi",
      brand: "Xiaomi",
      price: "₹18,999",
      availability: "In Stock",
      category: "Smartphone",
      description:
        "Redmi smartphone offering great features, good battery life and excellent value for money."
    }
  }

  const product = products[productName]

  if (!product) {
    return (
      <div className="not-found">

        <h1>Product Not Found</h1>

        <p>
          Sorry, this product does not exist.
        </p>

        <Link to="/products" className="button">
          Back to Products
        </Link>

      </div>
    )
  }

  return (
    <div className="details-container">

      <div className="details-card">

        <div className="product-large-icon">
          📱
        </div>

        <div className="details-content">

          <h1>{product.name}</h1>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Price:</strong> {product.price}
          </p>

          <p>
            <strong>Availability:</strong> {product.availability}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Description:</strong> {product.description}
          </p>

          <Link to="/products" className="button">
            Back to Products
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails