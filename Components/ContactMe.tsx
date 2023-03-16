import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
         <h3 className="absolute top-24  uppercase tracking-[20px] text-2xl text-gray-500">
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
            I have got what you need.
            <span className='decoration-red-500 underline'>Lets Talk</span>
        </h4>
        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <BsFillTelephoneFill className='text-red-500' size={25} />
                <p className='text-2xl'>+1234567890</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <AiOutlineMail className='text-green-600' size={25} />
                <p className='text-2xl'>abhishek@dev.in</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <FaMapMarkerAlt className='text-yellow-500' size={25} />
                <p className='text-2xl'>Biyani</p>
            </div>
        </div>
<form className='flex flex-col w-fit space-y-2 mx-auto'>
    <div className='flex space-x-2'>
        <input className='inputcustom' type="text" placeholder='name'/>
        <input className='inputcustom' type="email" placeholder='email'/>
    </div>
    <input type="text"  className='inputcustom'placeholder='Subject' />
    <textarea className='inputcustom' placeholder='message'/>
      <button type='submit' className='rounded-md bg-red-500 text-lg font-bold py-5 px-10'>Submit</button>
</form>
      </div>
    </div>
  )
}

export default ContactMe