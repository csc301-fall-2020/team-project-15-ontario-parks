import React, { useState, useEffect, useContext } from 'react'
import backendUrl from '../constants/backendUrl'
import axios from 'axios'
import { LocationContext } from './LocationContext'
import { CategoryContext } from './CategoryContext'

const AttractionContext = React.createContext()

function AttractionContextProvider(props) {
    /**
     * Context for interacting with server and fetch data
     */
    const [ attractions, setAttractions ] = useState([])
    const [ park, setPark ] = useState('')

    const { location } = useContext(LocationContext)
    const { selectedCategories } = useContext(CategoryContext)

    // Returns the attraction with the provided id
    const getAttraction = (id) => {
        return attractions.find(attraction => attraction._id == id)
    }

    // Gets nearest park from the backend
    useEffect(() => {
        axios.get(`${backendUrl}/parks/nearest`, {
            params: {
                latitude: location ? location.coords.latitude : 43.6464479,
                longitude: location ? location.coords.longitude : -79.463079,
            }
        })
            .then(res => {
                setPark(res.data.data.name)
            })
            .catch(err => {
                console.log(err)
            })     
    }, [location])    
    
    // Gets attractions in the park from the backend
    useEffect(() => {
        if (park) {
            let params = { park }
            if (selectedCategories) {
                params.category = selectedCategories.join(',')
            }

            axios.get(`${backendUrl}/attractions`, { params })
                .then(res => {
                    setAttractions(res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })             
        }
    }, [park, selectedCategories])

    return (
        <AttractionContext.Provider value={{attractions, getAttraction, park, location}}>
            { props.children }
        </AttractionContext.Provider>
    )
}

export { AttractionContext, AttractionContextProvider }