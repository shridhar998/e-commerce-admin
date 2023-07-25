import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import CreatePdt from './components/CreatePdt';
import UpdatePdt from './components/UpdatePdt';
import DeletePdt from './components/DeletePdt';
import Card from './components/Card';


const BACKEND_URL ='https://e-commerce-backend-deqs.onrender.com/api/products';

function App() {
  const [id,setId]=useState([]);
  const getId = async()=>{
    const res=await axios.get(BACKEND_URL)
    setId(res.data)
  }
  useEffect(()=>{
    getId();
  },[])
  return (
    <div className='container'>
      <h1>Suman Jewellers Admin panel</h1>
      <h2>These are the ids</h2>
      {
        id.map((item,idx)=>{
          return(
            <Card
            key={idx}
            item={item}
            />
          )
        })
      }
      <div>
        <p style={{fontSize:30}}>Add new Product:</p>
        <CreatePdt url={BACKEND_URL}/>
      </div>
      <div>
      <p style={{fontSize:30}}>Update Product:</p>
        <UpdatePdt url={BACKEND_URL} />
      </div>
      <div>
      <p style={{fontSize:30}}>Delete Product:</p>
        <DeletePdt url={BACKEND_URL} />
      </div>
    </div>
    )
}

export default App
