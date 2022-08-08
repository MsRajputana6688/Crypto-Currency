import React, { createContext } from 'react'
import ConA from './ConA'
const BioData  = createContext()

const App = () => {
    return (
        <>
            <BioData.Provider value={"Jay Shree Ram"}>
                <ConA />
            </BioData.Provider>
        </>
    )
}

export default App;
export {BioData};