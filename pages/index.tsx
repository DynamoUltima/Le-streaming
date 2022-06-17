import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (


      
      <div className=" w-full  m-auto flex-col h-screen bg-gray-500 py-10">
      <div><Nav/></div>
    
      
          {/* <Image /> */}
        <div className='flex flex-col'>
        <div className='pt-20  h-64 w-8/12 object-cover'>
            {/* <Image src={'/singer.jpeg'} height="200" width={'500'} objectFit="cover" alt="carousel"/> */}
            <img src={'/singer.jpeg'}  alt="carousel" className='w-full h-fit' />
          </div>
         

       

        <div className='text-lg text-green'>Hellooooooooooo</div>
        <div className='text-lg text-green'>green</div>

        </div>
          


      </div>
  

  )
}

export default Home
