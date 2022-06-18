import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormGroup } from 'react-bootstrap';
import Button from '@mui/material/Button';
const baseURL = "http://localhost:5296/api/Navigation";


export default function CreateNews(props) {

    const [newsTitle, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    console.log(baseURL)

    function onCreateNav(e) {
        e.preventDefault();

        const postData = {
            title,
            link,
            featuredImage,
        };

        axios.post(baseURL, postData).then((response) => {
            alert("navigation added successfully");
        }).catch(error => {
            console.log(error.message)
        })

    }



    return (
        <div className="wrapper">
            <Form onSubmit={onCreateNav}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Link">
                    <Form.Label>Link</Form.Label>
                    <Form.Control type="text" placeholder="" value={link} onChange={(e) => setLink(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="featuredImage">
                    <Form.Label>Featured Image</Form.Label>
                    <Form.Control type="file" value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="contained" size='large' className='float-end mt-4'>
                    Save
                </Button>
            </Form>
        </div>
    );
}