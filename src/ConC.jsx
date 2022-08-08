import React  from 'react'
import { useContext } from 'react'
import { BioData } from './App'
const ConC = () => {
    const data = useContext(BioData)
  return (
    <>
        {data}
    </>
  )
}

export default ConC