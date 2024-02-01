import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { get, set } from 'mongoose'
import { Link } from 'react-router-dom'
import Footer from './Footer'


export default function Home() {
  const [value, setValue] = React.useState([])
  const [imageUrl, setImageUrl] = React.useState("")


  // useEffect(() => {
  //   getItem();
  //   console.log(value[0])
  // }, [])


useEffect(() => {

  const getItem = () => {
    console.log("clicked")
    const res = axios.get(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => {
        console.log(res.data)
        setValue(res.data)
      })
      .catch((err) => {
        console.log(err)
      })


  }
  getItem();
}, [value])
  return (
    <div>
      <Navbar />

      <h1 className='mt-8 mb-8 font-bold text-4xl'>Popular Shows</h1>


      <div className="flex flex-wrap justify-between">
  {value.map((item, index) => (
    index !==4 && (
    <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
      <Link to={`${item.show.id}`}>
        

    <div className="max-w-sm w-full lg:max-w-full lg:flex -mr-10">
      <div className="flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
 title="Woman holding a mug">
  {
    item.show.image ? <img className='h-56 w-48 ml-2' src={item.show.image.medium}></img> : <img className='h-80 w-48' src="https://via.placeholder.com/150"></img>
  }

      </div>
      <div className="border-r border-b border-l mr-8 lg:w-96 md:w-96 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
         
         
         <div className="text-gray-900 font-bold text-3xl mb-2 flex justify-start">{item.show.name}</div>
        <div className='flex mt-4'>
          <button className='border mr-8 p-1 rounded-lg'>{item.show.runtime} min</button>
          <p className='text-gray-700 text-base flex justify-start font-bold mt-1'>{item.show.genres.join(', ')}</p>
        </div>
            <p className='flex justify-start mt-4 font-semibold'>Language: {item.show.language}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            

<div class="flex items-center lg:-mt-10">
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{item.show.rating.average}</p>
    
</div>

          </div>
        </div>
      </div>
    </div>
 

      </Link>
    </div>
    )
  ))}
</div>
<Footer/>


    </div>
  )
}
