import React, { useState } from 'react'
import axios from 'axios';
import './HeStyle.css'

const DeletePdt = ({url}) => {
  const [id,setId] = useState("")
  const [title,setTitle] = useState("");
  const [supplier,setSupplier] = useState("Suman Jewellers");
  const [price,setPrice] = useState("");
  const [imageUrl,setImageUrl] = useState("");
  const [description,setDescription] = useState("");
  const [product_location,setproduct_location] = useState("Chapra");
  const handleChange = async() =>{
    const dta = await axios.get(url+`/${id}`);
    setTitle(dta.data.title);
    setPrice(dta.data.price)
    setImageUrl(dta.data.imageUrl)
    setDescription(dta.data.description)
  }
  const DeletePdtBtn = async() =>{
    handleChange();
    let data={
      title:title,
      supplier:supplier,
      price:price,
      imageUrl:imageUrl,
      description:description,
      product_location:product_location
    }
    await axios.delete(url+`/${id}`,data,{
      headers: {
      'Content-Type': 'application/json'}}).then(()=>console.log("your data has been deleted")).catch(err=>{console.log(err)});
    setId("");
  }
  return (
    <div className='container-d'>
      <div>Enter the unique id of the product you want to delete:</div>
      <div className='input-delete'>
        <input
        size={37}
        placeholder='Enter the unique id...'
        onChange={(e)=>setId(e.target.value)}
        value={id}
        />
      </div>
      <div className='btn'>
        <a onClick={()=>DeletePdtBtn()}>Submit</a>
      </div>
    </div>
  )
}

export default DeletePdt