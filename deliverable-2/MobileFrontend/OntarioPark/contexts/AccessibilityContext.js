import React, { useState } from 'react'

const AccessibilityContext = React.createContext()

function AccessibilityContextProvider(props) {
    /**
     * Context for storing if the user is in accessibility mode
     */
    const [ inAccessibilityMode, setInAccessibilityMode ] = useState(false)

    return (
        <AccessibilityContext.Provider value={{ inAccessibilityMode, setInAccessibilityMode }}>
            { props.children }
        </AccessibilityContext.Provider>
    )
}

export { AccessibilityContext, AccessibilityContextProvider }