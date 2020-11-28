import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Container from 'react-bootstrap/Container'

const CategoryPage = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/categories').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    })

    return (
        <Container>Category</Container>
    );
};

export default CategoryPage;