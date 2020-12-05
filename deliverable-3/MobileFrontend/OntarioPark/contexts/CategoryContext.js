import React, { useState, useEffect } from 'react'
import backendUrl from '../constants/backendUrl'
import axios from 'axios'

const CategoryContext = React.createContext()

function CategoryContextProvider(props) {
    /**
     * Context for interacting with server and fetch avaliable categories
     */
    const [ allCategories, setAllCategories ] = useState([])
    const [ selectedCategories, setSelectedCategories ] = useState([])

    useEffect(() => {
        axios.get(`${backendUrl}/categories`)
            .then(res => {
                setAllCategories(res.data.data)
            })
    }, [])

    return (
        <CategoryContext.Provider value={{allCategories, selectedCategories, setSelectedCategories}}>
            { props.children }
        </CategoryContext.Provider>
    )
}

export { CategoryContext, CategoryContextProvider }