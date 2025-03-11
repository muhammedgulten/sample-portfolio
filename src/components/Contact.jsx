import React from 'react'
import { CONTACT } from "../constants"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'


const Contact = () => {
    return (
        <div className='border-t border-stone-900 pb-20'>
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
            <div className='text-center tracking-tighter'>
                <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='my-4'>
                    {CONTACT.address}
                </motion.p>
                <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='my-4'>
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} href="#" className='border-b'>
                    {CONTACT.email}
                </motion.a>
            </div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='text-4xl flex items-center justify-center m-8 gap-5'>
                <a href="https://www.linkedin.com/in/muhammedgulten"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn' >
                    <FaLinkedin />
                </a>
                <a href="https://github.com/muhammedgulten"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github' >
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/muhammedgultenn/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram' >
                    <FaInstagram />
                </a>
            </motion.div>
        </div>
    )
}

export default Contact
