import React from 'react';

const ProductDetails = ({ product, addtoCart, onClose }) => {
    return (
        <>
            <button className='font-semibold bg-gray w-fit text-white px-3 py-1.5' onClick={onClose} >Close</button>
            <div key={product.id} className="grid border-2 border-slate-100	p-5">
                {/* Render product details here (e.g., title, description, price) */}
                <img src={product.thumbnail} alt={product.image} className="h-100 justify-self-center" />
                <h2 className="font-bold">{product.title}</h2>
                <p>{product.description}</p>
                <p className='font-bold text-uppercase'>{product.category}</p>
                <button type="button" className="font-semibold bg-gray w-fit text-white px-3 py-1.5" onClick={() => addtoCart(product)}>Add to Cart</button>
            </div>
        </>
    )
}

export default ProductDetails;
