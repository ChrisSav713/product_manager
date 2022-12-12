import React, { useState } from 'react'
import axios from 'axios';
import {Button, Form} from 'react-bootstrap'

const ProductForm = (props) => {
    const {products, setProducts} = props
    const [formData, setFormData] = useState({
        title:"",
        price:"",
        description:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', formData)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProducts([
                    ...products,
                    res.data
                ])
            })
            .catch((err) => console.error(err))
    }
    
    return (
        <div style={{width:"60%", margin:"auto auto", textAlign: "center"}}>
            <h1>Product Manager</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name="title"
                        value={formData.title}
                        placeholder="Title"
                        style={{marginBottom: "1rem"}}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name="price"
                        value={formData.price}
                        placeholder="Price"
                        style={{marginBottom: "1rem"}}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name="description"
                        value={formData.description}
                        placeholder="Description"
                        style={{marginBottom: "1rem"}}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    style={{width:"100%", marginBottom:"1rem"}}
                    variant="outline-success"
                    onClick={handleSubmit}
                >
                    CREATE PRODUCT
                </Button>
            </Form>
        </div>
    )
}
export default ProductForm;