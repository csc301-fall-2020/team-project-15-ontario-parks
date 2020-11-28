import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Container from 'react-bootstrap/Container'

const CategoryPage = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get('https://damp-cliffs-49792.herokuapp.com/api/categories').then(res => {
            setCategories(res)
        }).catch(err => {
            console.log(err)
        })
    })

    // const displayedCategories = categories.map()

    return (
        <Container>Category</Container>
    );
};

export default CategoryPage;