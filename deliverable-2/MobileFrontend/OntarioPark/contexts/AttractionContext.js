import React, { useState, useEffect } from 'react'
import backendUrl from '../constants/backendUrl'
import axios from 'axios'

const AttractionContext = React.createContext()

function AttractionContextProvider(props) {
    /**
     * Context for interacting with server and fetch data
     */
    const [ attractions, setAttractions ] = useState([])
    const [ update, setUpdate ] = useState(true)

    // Returns the attraction with the provided id
    const getAttraction = (id) => {
        return attractions.find(attraction => attraction._id == id)
    }

    // Gets all avaliable items from the backend
    useEffect(() => {
        if (update) {
            axios.get(backendUrl)
                .then(res => {
                    setAttractions(res.data)
                })
                .catch(err => {
                    console.log(err)
                })    
            setUpdate(false)
        }    
    }, [update])

    return (
        <AttractionContext.Provider value={{setUpdate, attractions, getAttraction}}>
            { props.children }
        </AttractionContext.Provider>
    )
}

export { AttractionContext, AttractionContextProvider }