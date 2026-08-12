import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">

      <h1>Welcome to SivaStore</h1>

      <p>
        Find the latest smartphones at affordable prices.
      </p>

      <Link to="/products" className="button">
        View Products
      </Link>

    </div>
  )
}

export default Home