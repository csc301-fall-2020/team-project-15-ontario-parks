import React, { useState, useEffect } from 'react'
import backendUrl from '../constants/backendUrl'
import axios from 'axios'
import {getSelectedCategories} from "../localStorage";

const CategoryContext = React.createContext()

function CategoryContextProvider(props) {
    /**
     * Context for interacting with server and fetch avaliable categories
     */
    const [ allCategories, setAllCategories ] = useState([])
    const [ selectedCategories, setSelectedCategories ] = useState([])

    // Fetch all avaliable catagories from the server
    useEffect(() => {
        axios.get(`${backendUrl}/categories`)
            .then(res => {
                setAllCategories(res.data.data)
            })
    }, [])
    useEffect(() => {

        getSelectedCategories().then(res => {
            console.log("categoires", res);
            setSelectedCategories(res)})
    }, [])

    return (
        <CategoryContext.Provider value={{allCategories, selectedCategories, setSelectedCategories}}>
            { props.children }
        </CategoryContext.Provider>
    )
}

export { CategoryContext, CategoryContextProvider }