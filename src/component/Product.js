import React ,{useState} from 'react'

const Product = (props) => {


  const [title, setTitle] = useState(props.product.name);
  
 

 let clickHandler = () => {
    setTitle("Popcorn");
  };
  
  
  return (
    <>
     <div className='font-mono text-3xl' id='btn' >{title}</div>
     <button  className='h-8 px-2 text-white bg-black rounded-lg min-w-fit' onClick={clickHandler}>Add To Cart</button>
    </>   
  )
}

export default Product