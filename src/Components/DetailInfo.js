import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


export default function DetailInfo() {
    const [value, setValue] = React.useState([])
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [number, setNumber] = React.useState("")
    const navigate=useNavigate();

    const userInfo={
        name:name,
        email:email,
        number:number
    }

    const { id } = useParams();

    useEffect(() => {
        const res = axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => {
                console.log(res.data)
                setValue(res.data)
                console.log("hello", value)

            })
            .catch((err) => {
                console.log(err)
            })

    }, [value])
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    
    const handleSubmit= () => {
        console.log("booked")
        console.log(userInfo)
    localStorage.setItem("userInfo",JSON.stringify(userInfo))
    alert("Your Ticket is Booked")
    navigate("/")

    }
    return (
        <div>
            <Navbar />
        
            <div className="mx-auto mt-10 p-4 md:p-8">
                <div className="flex flex-col md:flex-row justify-center md:space-x-8">
                    <div className="w-full md:w-1/2">
      {
        value.image && (
          <img src={value.image.medium} alt="Image" className="w-full lg:h-96 " />
        )
      }
     </div>
     <div className="w-full md:w-1/2 mt-4 md:mt-0 lg:-ml-40 border">
                        <h2 className='text-3xl font-bold mb-4 lg:mt-4'>{value.name}</h2>
        <div className='flex mt-4 '>
        <button className='ml-4 border p-1 rounded-lg'>{value.runtime} min</button>
        <p className='ml-4 font-semibold text-base mt-1'>
        {value.genres && value.genres.join(', ')}
</p>
        </div>
        <div className='flex justify-start'>
        {value.summary && (
    <p className="mt-4  text-left ml-2 text-sm" dangerouslySetInnerHTML={{ __html: value.summary.replace(/<\/?p>|<\/?b>/g, '') }} />
  )}


        </div>
        <div className='flex justify-between'>

      
        <div class="flex items-center mt-2 ml-2 ">
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
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {value.rating && value.rating.average}
        </p>
    
        </div>
                </div>
                <div className="text-center rounded-lg text-white font-bold my-4">
                    <button
                        type="button"
                        onClick={openModal}
                        className="w-full md:w-40 py-2 text-center rounded-lg text-white font-bold bg-green-600"
                    >
                    Book Your Ticket
                </button>
                <ToastContainer />

            </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50">

                                    <section className="">
                                        <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                                          
                                            <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                                        <div>
                                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Show Name</label>
                                                            <input value={value.name} disabled  className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                                            <input onChange={(e)=>{setName(e.target.value)}} type="text" name="address" id="address" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="emaik" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Mobile No.</label>
                                                            <input onChange={(e)=>{setNumber(e.target.value)}} type="text" name="number" id="number" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>

                                                    </form>
                                                    
                                                    <button onClick={()=>{handleSubmit();closeModal()}} type="button" className="focus:outline-none w-full text-white bg-violet-600 bg-green-600 hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Book Now</button>
                                                    <ToastContainer />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
      </div>
    </div>
            
            <Footer/>

        </div>
    )
}
