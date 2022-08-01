import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import styles from '../styles/Home.module.css'
import CarouselSlider from '../components/ui/carousel'
import SquareCard from '../components/ui/squareCard'
import RectangularCard from '../components/ui/rectangularCard'

const Home: NextPage = () => {
  return (



    <div className=" w-full min-w-full m-auto flex-col h-screen  bg-black overflow-auto p-5 ">
      <Nav />

      {/* <div className='bg-blue-500'>



        <form action="" className="" >
          <div className="flex items-center bg-gray-100 rounded-2xl border-b border-gray-200 w-96 outline-none shadow-none">
            <label htmlFor="name" className="w-10 text-right ml-4 mr-8 text-purple-20"><svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></label>
            <input type="text" id="name" name="name" placeholder="search" className="flex-1 px-4 py-2 pl-0 bg-transparent placeholder-gray-300 outline-none text-gray-400"></input>
          </div>
        </form>

        <div className="py-10 flex justify-between">
          <div className="inline-flex items-center" >
            <div className="px-2 font-semibold text-gray-500">Member</div>
            <div className="text-sm text-gray-400">1200</div>
          </div>
          <button className="bg-violet-light hover:bg-indigo-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
        </div>

      </div> */}
      {/* Nav Areaaaaaaaaaaaaa */}



      {/* <Image /> */}
      <div className='flex flex-col mt-20'>

        <div className='flex flex-row  h-96   overflow-auto scrollbar-hide'>
          {/* <div className='space-y-40'></div> */}

          {/* <div className=' w-16'></div> */}
          {/* <div className=' flex-1  p-10 '> */}



          {/* <Image src={'/singer.jpeg'} height="200" width={'500'} objectFit="cover" alt="carousel"/> */}
          {/* <img src={'/singer.jpeg'} alt="carousel" className='w-full h-96 object-cover pb-16 ' /> */}
          <CarouselSlider />
          {/* </div> */}



        </div>


        <div className=' md:grid grid-cols-4 '>

          {/* Container Title */}
          <div className=' col-span-3 '>

            {/* Horizontal list */}
            <div className='text-white' >
              <div className='flex justify-between px-10 py-5 '>

                <div className='text-lg '>Trending</div>
                <div>arrow</div>

              </div>

              <ul className='flex flex-row space-x-5 overflow-x-auto px-10  overflow-y-hidden '>
                {/* Cards */}

                <SquareCard />
                <SquareCard />
                <SquareCard />
                <SquareCard />



              </ul>

            </div>




          </div>

          <div className=' '>
            <div className='text-start py-5 px-4  text-white' >Coming Soon</div>
            {/* Vertical list */}

            <ul className='flex flex-col px-4 space-y-2  h-72  overflow-auto'>

              <RectangularCard />

              <RectangularCard />

              <RectangularCard />

              <RectangularCard />






            </ul>

          </div>


        </div>


        {/* Recent Plays */}

        <div className=' md:grid grid-cols-4'>
          <div className=' col-span-2 overflow-auto text-white'>
            Recently Played
            <div>

              <ul className='flex flex-col space-y-5'>

                <div className='h-32   rectangle flex flex-row justify-between '>

                  <div className='flex flex-row'>
                    <img src={'/singer.jpeg'} alt="list" className=' max-h-36 aspect-square p-3' />

                    <div className='py-2 text-start space-y-2 justify-between flex flex-col'>
                      <div className='text-lg text-white font-semibold'>Lorem ipsum dolor</div>
                      <div className='text-sm text-slate-300 font-light'>Pastor Elikem</div>
                      <div className='text-sm text-slate-300 font-light'>25 June 2022</div>
                    </div>

                  </div>


                  <div className='py-2 flex flex-col justify-between px-3 pb-10'>
                    <div className='text-slate-200'>5:00 AM</div>
                    <div className='text-slate-200 text-sm font-thin'>38 mins</div>
                  </div>
                </div>

                <div className='h-32   rectangle flex flex-row justify-between  '>
                  <div className='flex flex-row'>
                    <img src={'/singer.jpeg'} alt="list" className=' max-h-36 aspect-square p-3' />

                    <div className='py-2 text-start space-y-2 justify-between flex flex-col'>
                      <div className='text-lg text-white font-semibold'>Lorem ipsum dolor</div>
                      <div className='text-sm text-slate-300 font-light'>Pastor Elikem</div>
                      <div className='text-sm text-slate-300 font-light'>25 June 2022</div>
                    </div>

                  </div>


                  <div className='py-2 flex flex-col justify-between px-3 pb-10'>
                    <div className='text-slate-200'>5:00 AM</div>
                    <div className='text-slate-200 text-sm font-thin'>38 mins</div>
                  </div>
                </div>


              </ul>
            </div>
          </div>

          <div className=''>
            <div className='text-white py-2'>Playing</div>

            <div className='w-full  aspect-square flex flex-col '>
              <img src={'/singer.jpeg'} alt="list" className='object-cover h-64' />
              <div className='py-2 text-start text-white font-semibold'>Lorem ipsum dolor</div>
              <div className='text-sm text-slate-300'>25 mins played </div>
            </div>

          </div>


          {/* My Favourites */}

          <div className=''>
            <div className='py-2 px-5 text-white'> My Favourites</div>

            {/* Horizontal List */}


            <ul className='flex flex-col px-4 space-y-2  h-72  overflow-auto'>

              <RectangularCard />
              <RectangularCard />
              <RectangularCard />
              <RectangularCard />
              <RectangularCard />
              <RectangularCard />


            </ul>


          </div>


        </div>

        <div>
          <div className='text-white py-2'>Recent Upload</div>

          <div className='flex'>
            {/* Recent Uploads */}
            <div className='md:grid grid-cols-3 md:gap-4  gap-4'>

              <SquareCard />
              <SquareCard />
              <SquareCard />
              <SquareCard />
              <SquareCard />
              <SquareCard />





            </div>

          </div>


        </div>


      </div>



    </div>


  )
}

export default Home
