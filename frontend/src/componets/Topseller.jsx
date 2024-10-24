import React, { useEffect, useState } from 'react'
//abhi data nhi hai thats why we are useing static data
const categories =["Choose a genre","fiction","Horror","Adventure","Business"]
function Topseller() {
    const [books,setBooks] = useState([]);
    const[selectedCategories,setSelectedCategories]=useState("Choose a genre")
    useEffect(()=>{
        fetch("book.json")
        .then(res=>res.json())
        .then((data)=>setBooks(data))
    },[])
    const filterBooks=selectedCategories==="Choose a genre" ?books :books.filter(book=>
      book.category===selectedCategories.toLowerCase())
      console.log(filterBooks);
      
  return (
    <div >
      <div>
           <h2 className='text-2xl font-semibold m-6'>Top Seller</h2>
      </div>
         <div className='m-6 h-screen'> 
        {/*categry filtering*/}
            <select
             onChange={(e)=>setSelectedCategories(e.target.value)}
             name="category" id="category " className='border-gray-200 bg-gray-200 rounded' >
           { 
            categories.map((categry,index)=>(
            <option  key={index} value={categry}>{categry}</option>
           ))
          
           }
           </select>
      </div>  
    </div>
  )
}

export default Topseller
