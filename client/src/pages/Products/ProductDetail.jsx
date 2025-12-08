
import { useEffect, useState } from "react";
import { fetchProduct } from "../../api/products.js"
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/products.css';


const ProductDetail = () => {

    const { id } = useParams();
    const nav = useNavigate();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        fetchProduct(id).then(setProduct).catch(() =>{});
    }, [id]);

    if (!product) return <p>Loading...</p>;


  return (
    <div className="product-detailPage">
        <button onClick={() => nav(-1)}>Back</button>
        <h1> {product.name}</h1>
        <img src={product.image || '/placeholder.png'} alt={product.name} className="detail-img" />
        <p> {product.description} </p>
        <p> Price: {product.price} </p>
        <p> quantity: {product.quantity} </p>
    </div>
  )
}

export default ProductDetail