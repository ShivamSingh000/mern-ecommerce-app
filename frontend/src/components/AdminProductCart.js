import React from 'react'

const AdminProductCart = () => {

    return (
        <div className='bg-white p-4 rounded '>
            <img src={product?.productImage[0]} width={120} height={120} />
            <h1>{product.productName}</h1>
        </div>
    )
}

export default AdminProductCart