import React, { useState } from 'react'
import './HeStyle.css'
import axios from 'axios';

const CreatePdt = ({url}) => {
  const [title,setTitle] = useState("");
  const [supplier,setSupplier] = useState("Suman Jewellers");
  const [price,setPrice] = useState("");
  const [imageUrl,setImageUrl] = useState("");
  const [description,setDescription] = useState("");
  const [product_location,setproduct_location] = useState("Chapra");
  
  const CreatePdtBtn = async()=>{
    console.log("clicked")
    let data={
      title:title,
      supplier:supplier,
      price:price,
      imageUrl:imageUrl,
      description:description,
      product_location:product_location
    }
    // const payload = JSON.stringify(data);

     await axios.post(url,data,{
      headers: {
      'Content-Type': 'application/json'}}).then(()=>console.log("YOUR product has been created successfully")).catch((error) => {console.log(error)})
     setImageUrl("")
     setDescription("")
     setTitle("")
     setPrice("")
     setSupplier("")
     setproduct_location("")
  }
  return (
    <div className='container-c'>
      <div>
        <div>Enter the Title of the product you want to add:</div>
        <div className='input-create'>
          <input
          size={37}
          placeholder='Enter the title...'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          />
        </div>
      </div>
      
      <div className='uparsegap'>
        <div>Enter the price of the product you want to add:</div>
        <div className='input-create'>
          <input
          size={37}
          placeholder='Enter the price...'
          onChange={(e)=>setPrice(e.target.value)}
          value={price}
          />
        </div>
      </div>
      <div className='uparsegap'>
        <div>Enter the Image URL of the product you want to add:</div>
        <div className='input-create'>
          <input
          size={37}
          placeholder='Enter the image-url...'
          onChange={(e)=>setImageUrl(e.target.value)}
          value={imageUrl}
          />
        </div>
      </div>
      <div className='uparsegap'>
        <div>Enter the Description of the product you want to add:</div>
        <div className='input-create'>
          <textarea
          placeholder='Enter the description...'
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          >
          </textarea>
        </div>
      </div>
      <div className='btn'>
        <a onClick={()=>CreatePdtBtn()}>Submit</a>
      </div>
    </div>
  )
}

export default CreatePdt