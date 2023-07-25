import React,{useState} from 'react'
import axios from 'axios';

const UpdatePdt = ({url}) => {
  
  const [id,setId] =useState("");
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
  const UpdatePdtBtn = async() =>{
    let data={
      title:title,
      supplier:supplier,
      price:price,
      imageUrl:imageUrl,
      description:description,
      product_location:product_location
    }
    await axios.patch(url+`/${id}`,data,{
      headers: {
      'Content-Type': 'application/json'}}).then(()=>console.log("YOUR product has been updated successfully")).catch((error) => {console.log(error)})
     setImageUrl("")
     setDescription("")
     setTitle("")
     setPrice("")
     setSupplier("")
     setproduct_location("")
     setId("");
  }
  return (
    <div className='container-c'>
    <div>
      <div>Enter the unique id of the product you want to update:</div>
      <div className='input-create'>
        <input
        size={37}
        placeholder='Enter the unique id...'
        onChange={(e)=>setId(e.target.value)}
        value={id}
        />
        <div className='btn'>
          <a onClick={()=>handleChange()}>Submit</a>
        </div>
      </div>
    </div>
    <div>
      <div>Enter the Title of the product you want to update:</div>
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
      <div>Enter the price of the product you want to update:</div>
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
      <div>Enter the Image URL of the product you want to update:</div>
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
      <div>Enter the Description of the product you want to update:</div>
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
      <a onClick={()=>UpdatePdtBtn()}>Submit</a>
    </div>
  </div>
  )
}

export default UpdatePdt