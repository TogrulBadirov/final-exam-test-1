import React, { useState } from 'react'
import axios from 'axios'
import "./index.scss"
const AddPage = () => {
  const [category, setName] = useState('')
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const handleAddProduct = async ()=>{
    const resp = await axios.post("http://localhost:3000/",{
      category,
      image,
      title,
      price
    })

  }
  return (
    <>
    <section id='add-page'>
    <h1>Add Page</h1>
    <form action="">
      <input type="text" value={category} placeholder='Product category' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" value={image} placeholder='Product Image' onChange={(e)=>setImage(e.target.value)}/>
      <input type="text" value={title} placeholder='Product Title' onChange={(e)=>setTitle(e.target.value)}/>
      <input type="number" value={price} placeholder='Product Price' onChange={(e)=>setPrice(e.target.value)}/>
      <button onClick={()=>handleAddProduct()}>Add</button>
    </form>
    </section>
    </>
  )
}

export default AddPage

// image: String,
// category: String,
// title: String,
// price: Number,