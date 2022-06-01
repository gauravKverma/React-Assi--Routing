import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react' 
import axios from "axios"
import { Link } from 'react-router-dom'
const Products = () => {
    const [product, setProduct] = useState([])
    // console.log(product,"sdsa")
    useEffect(()=> {
        const data = async () => {
            let res = await axios.get("http://localhost:8080/data");
            // console.log(res.data);
            setProduct(res.data);
        }
        data();
    },[]);
  return (
    <div style={{textAlign:"center"}}>
        Products
            {product.map((item) => (
                <table key={item.id} style={{marginLeft:"41%"}}>
                    <thead>
                        <tr>
                            <td style={{width:"110px"}}>{item.name}</td>
                            <td style={{width:"50px"}}>{item.price}</td>
                            <td><Link to={`/products/${item.id}`}>More Details</Link></td>
                        </tr>
                    </thead>
                </table>
            ))}
    </div>
  )
}

export default Products