import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] =useState({});
    // console.log(product);
    const { id } = useParams();
    // console.log(id)

    useEffect(()=> {
        if(id){
            fetch(`http://localhost:8080/data/${id}`)
            .then((r) => r.json())
            .then((d)=> setProduct(d));
        }
    },[id])
  return (
    <div>Product ID: {id}
    <div>Product Name-{product.name}</div>
    <div>Price-{product.price}</div>
    </div>
  )
}

export default Product