import { useState, useEffect } from 'react';
import Cart from "./Cart";
import ProductDetails from './ProductDetails';
// import { Route, Link, Switch } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]); // Use plural 'products' for clarity
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [showdetail, setShowDetail] = useState(false);
    const [page, setPage] = useState(1);

    const prevClick = () => {
        setPage((prev) => prev - 1);
    };
    const nextClick = () => {
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/products?limit=100');
            const data = await response.json();
            setProducts(data.products); // Update products state
        };
        fetchData();
    }, []);

    const addtoCart = (product) => {
        setCount(count + 1);
        setCart([...cart, product]);
    };

    const removefromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
        setCount(count - 1);
    };

    const handleShowDetail = (product) => {
        setShowDetail(product);
    }
    const handleCloseDetails = () => {
        setShowDetail(false)
    }

    return (
        <>
            {showdetail ? (
                <ProductDetails product={showdetail} onClose={handleCloseDetails} addtoCart={addtoCart} />
            )
                :
                (
                    <div>
                        <div className="grid grid-cols-3 p-3 gap-4">
                            {products.length ? (
                                products.slice(page * 10 - 10, page * 10).map((product) => (
                                    <div key={product.id} className="grid border-2 border-slate-100	p-5">
                                        {/* Render product details here (e.g., title, description, price) */}
                                        <img src={product.thumbnail} alt={product.thumbnail} className="h-100 justify-self-center" />
                                        <h2 className="font-bold">{product.title}</h2>
                                        <p>{product.description}</p>
                                        <p className='font-bold text-uppercase'>{product.category}</p>
                                        <button type="button" className="font-semibold bg-gray w-fit text-white px-3 py-1.5" onClick={() => addtoCart(product)}>Add to Cart</button>
                                        <button type="button" className="" onClick={() => handleShowDetail(product)}>Show Details</button>
                                    </div>
                                ))
                            ) : (
                                <div className='grid'>
                                    Loading...
                                </div>
                            )}
                        </div>
                        <div className="pagination flex justify-center p-10">
                            <span
                                className={page === 1 ? "inactive" : "active"}
                                onClick={prevClick}
                            >
                                ◀️
                            </span>
                            {[...Array(products.length / 10)].map((_, index) => {
                                return (
                                    <span
                                        className={page === index + 1 && "active-page-num"}
                                        onClick={() => setPage(index + 1)}
                                    >
                                        {index + 1}
                                    </span>
                                );
                            })}
                            <span
                                className={page === products.length / 10 ? "inactive" : "active"}
                                onClick={nextClick}
                            >
                                ▶️
                            </span>
                        </div>
                    </div>
                )}
            {products.length > 0 && <Cart cart={cart} count={count} removefromCart={removefromCart} />}
        </>
    );
};
export default Product;
