import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts} = props;
    const navigate = useNavigate()

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

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res => console.log(res))
        .catch((err) => console.error(err))
        setProducts(products.filter(product => product._id != id))
    }

    const updateProduct = (id) => {
        navigate("/edit/" + id)
    }

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
                                <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <Button 
                                        onClick={() => updateProduct(product._id)}
                                        variant="outline-info" 
                                        style={{ width:"100%", marginRight: "1rem" }}
                                    >
                                        UPDATE
                                    </Button>
                                    <Button 
                                            onClick={() => deleteProduct(product._id)}
                                            variant="outline-danger" 
                                            style={{ width:"100%", marginRight: "1rem" }}
                                        >
                                            DELETE
                                    </Button>
                                </div>
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