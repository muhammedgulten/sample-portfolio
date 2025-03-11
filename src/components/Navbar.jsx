import React from 'react'
import logo from "../assets/logo.png"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'


const containerVariants = {
    hidden: { opacity: 0, x:100},
    visible: { 
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }

    }
}

const childVariants = {
    hidden: { opacity: 0, x:150},
    visible: {opacity: 1, x: 0, transition: { duration: 0.5 }}
}

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <motion.div initial="hidden" animate="visible" className="flex flex-shrink-0 items-center">
                <a href="/" aria-label='Home'>
                    <motion.img initial={{x:-120, opacity:0}} animate={{opacity:1,x:0}} transition={{duration:0.7}} src={logo} className='mx-2' width={75} height={33} />
                </a>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <motion.a variants={childVariants} href="https://www.linkedin.com/in/muhammedgulten" 
                target='_blank'
                rel='noopener noreferrer' 
                aria-label='LinkedIn' >
                 <FaLinkedin/>   
                </motion.a>
                <motion.a variants={childVariants} href="https://github.com/muhammedgulten" 
                target='_blank'
                rel='noopener noreferrer' 
                aria-label='GitHub' >
                 <FaGithub/>   
                </motion.a>
                <motion.a variants={childVariants} href="https://www.instagram.com/muhammedgultenn/" 
                target='_blank'
                rel='noopener noreferrer' 
                aria-label='Instagram' >
                 <FaInstagram/>   
                </motion.a>
            </motion.div>
        </nav>
    )
}

export default Navbar
