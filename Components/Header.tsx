import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex z-50 p-5 items-start justify-between max-w-7xl mx-auto sticky top-0'>
        {/* Social Icon  */}
        <motion.div className='flex flex-row items-center' 
        initial={{
          x:-500,
          opacity:0,
          scale:0.5,
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}>
            <SocialIcon url='https://twitter.com/kunwarabhi7' fgColor='blue'  bgColor='transparent' />
            <SocialIcon url='https://github.com/kunwarabhi7' fgColor='gray'  bgColor='transparent' />
            <SocialIcon url='https://youtube.com/kunwarabhi7' fgColor='red'  bgColor='transparent' />
           
        </motion.div>
        
        {/* Contact Me */}
        <div className='flex flex-row   items-center cursor-pointer text-gray-300'>
            <SocialIcon network='email' fgColor='gray' bgColor='transparent' />
       <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get IN Touch</p>
        </div>
    </header>
  )
}

export default Header