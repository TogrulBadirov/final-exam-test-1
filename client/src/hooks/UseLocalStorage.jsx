import { useState } from "react"

const UseLocalStorage = (key)=>{
    const [local, setLocal] = useState(localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):[])
    return []
}