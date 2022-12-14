import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import {useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'

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

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res => console.log(res))
        .catch((err) => console.error(err))
        navigate("/")
    }

    const updateProduct = (id) => {
        navigate("/edit/" + id)
    }

    return (
        <div>
            <Modal show={true} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center"}}>View a Product</Modal.Title>
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
                                disabled
                                value={product.title ? product.title : "Loading..."}
                            />
                            <Form.Label
                            >
                                Price
                            </Form.Label>
                            <Form.Control
                                style={{ marginBottom: "2rem" }}
                                placeholder="Price"
                                name="price"
                                disabled
                                value={product.price ? product.price : "Loading..."}
                            />
                            <Form.Label
                            >
                                Description
                            </Form.Label>
                            <Form.Control
                                style={{ marginBottom: "2rem" }}
                                placeholder="Description"
                                name="description"
                                disabled
                                value={product.description ? product.description : "Loading..."}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <Button 
                        style={{flexGrow:"1", margin:"1rem"}}
                        variant="outline-dark" onClick={handleClose}
                    >
                        BACK
                    </Button>
                    <Button 
                        style={{flexGrow:"1", margin:"1rem"}}
                        variant="outline-danger" onClick={() => deleteProduct(product._id)}
                    >
                        DELETE
                    </Button>
                    <Button 
                        style={{flexGrow:"1", margin:"1rem"}}
                        variant="outline-info" onClick={() => updateProduct(product._id)}
                    >
                        EDIT
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Detail