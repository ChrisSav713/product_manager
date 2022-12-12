import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(() => {
    axios
        .get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res)
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    //const listItems = products.map((item) => <div style={{border:"solid lightgray 1px"}} key={item._id}>{item._id}</div>)

    return (
        <div style={{width: "60%", textAlign: "center", margin: "auto auto" }}>
            {products ? (
                <>
                    {products.map(product => { 
                        return(
                            <div
                                key={product._id}
                                style={{ 
                                    border: "solid lightgray 1px" , 
                                    borderRadius: "8px", 
                                    marginBottom: "1rem", 
                                    padding: "1rem" 
                                }}
                            >
                                <Link to={product._id}>
                                    <h4>
                                        {product.title}
                                    </h4>
                                </Link>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </div>
                        )
                    })}
                </>
                )
            :
                ("Loading...")
            }

        </div>
    )
}

export default ProductList