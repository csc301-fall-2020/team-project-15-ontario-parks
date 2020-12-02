import React, { useState, useEffect } from 'react'
import backendUrl from '../constants/backendUrl'
import axios from 'axios'

const CategoryContext = React.createContext()

function CategoryContextProvider(props) {
    /**
     * Context for interacting with server and fetch avaliable categories
     */
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        axios.get(`${backendUrl}/categories`)
            .then(res => {
                setCategories(res.data.data)
            })
    }, [])

    return (
        <CategoryContext.Provider value={{categories}}>
            { props.children }
        </CategoryContext.Provider>
    )
}

export { CategoryContext, CategoryContextProvider }