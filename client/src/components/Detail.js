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

    return (
        <div>
            <Modal show={true} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center"}}>View a post</Modal.Title>
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
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Detail