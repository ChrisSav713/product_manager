import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import {useNavigate} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.error(err) );
    }, []);

    const navigate = useNavigate()
    const handleClose = () => navigate(-1)

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setProduct((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const saveProduct = () => {
        axios.put(`http://localhost:8000/api/product/${product._id}`, product)
        .then(res => console.log(res))
        .catch((err) => console.error(err))
        
        handleClose()
    }

    return (
        <div>
            <Modal show={true} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center"}}>Edit a Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group style={{ width:"60%", margin: "auto auto" }}>
                            <Form.Label
                            >
                                Title
                            </Form.Label>
                            <Form.Control
                                style={{ marginBottom: "2rem" }}
                                placeholder="Title"
                                name="title"
                                value={product.title ? product.title : "Loading..."}
                                onChange={handleChange}
                            />
                            <Form.Label
                            >
                                Price
                            </Form.Label>
                            <Form.Control
                                style={{ marginBottom: "2rem" }}
                                placeholder="Price"
                                name="price"
                                value={product.price ? product.price : "Loading..."}
                                onChange={handleChange}
                            />
                            <Form.Label
                            >
                                Description
                            </Form.Label>
                            <Form.Control
                                style={{ marginBottom: "2rem" }}
                                placeholder="Description"
                                name="description"
                                value={product.description ? product.description : "Loading..."}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <Button 
                        style={{flexGrow:"1", marginBottom:"2rem"}}
                        variant="outline-dark" onClick={handleClose}
                    >
                        CANCEL
                    </Button>
                    <Button 
                        style={{flexGrow:"1", marginBottom:"2rem"}}
                        variant="outline-primary" onClick={saveProduct}
                    >
                        SAVE CHANGES
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Detail