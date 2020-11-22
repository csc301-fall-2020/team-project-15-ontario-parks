import React, { useState } from 'react'

const AccessibilityContext = React.createContext()

function AccessibilityContextProvider(props) {
    const [ inAccessibilityMode, setInAccessibilityMode ] = useState(false)

    return (
        <AccessibilityContext.Provider value={{ inAccessibilityMode, setInAccessibilityMode }}>
            { props.children }
        </AccessibilityContext.Provider>
    )
}

export { AccessibilityContext, AccessibilityContextProvider }