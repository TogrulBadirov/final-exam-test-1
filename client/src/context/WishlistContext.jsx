import React, {  createContext, useState } from 'react'

const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [count, setCount] = useState(1)
    const data = {
        count,
        setCount
    }
  return (
   <WishlistContext.Provider value={data} >
    {children}
   </WishlistContext.Provider>
  )
}
export default WishlistProvider
