import { useContext } from "react"

import './Shop.scss'

import { ProductsContext } from "../../context/ProductsContext"
import ProductCard from "../../components/ProductCard/ProductCard"

const Shop = () => {
    const { products } = useContext(ProductsContext)

    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop