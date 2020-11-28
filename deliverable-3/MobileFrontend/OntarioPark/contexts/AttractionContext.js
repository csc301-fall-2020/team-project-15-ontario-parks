import React, { useState, useEffect } from 'react'
import backendUrl from '../constants/backendUrl'
import axios from 'axios'
import { LocationContext } from '../contexts/LocationContext'

const AttractionContext = React.createContext()

function AttractionContextProvider(props) {
    /**
     * Context for interacting with server and fetch data
     */
    const [ attractions, setAttractions ] = useState([])
    const { location } = useContext(LocationContext)

    // Returns the attraction with the provided id
    const getAttraction = (id) => {
        return attractions.find(attraction => attraction._id == id)
    }

    // Gets all avaliable items from the backend
    useEffect(() => {
        axios.get(backendUrl)
        .then(res => {
            setAttractions(res.data)
        })
        .catch(err => {
            console.log(err)
        })     
    }, [location])

    return (
        <AttractionContext.Provider value={{attractions, getAttraction}}>
            { props.children }
        </AttractionContext.Provider>
    )
}

export { AttractionContext, AttractionContextProvider }