const SquareCard = () => {
    return (
      
             <div className=' h-72  aspect-square flex flex-col   '>
                  <div className='relative  z-0 '>

                    <img src={'/singer.jpeg'} alt="list" className='object-cover h-64 -z-5' />

                    <div className='absolute inset-y-0 inset-x-0  grid items-center justify-center'>
                      <div className='rounded-full w-20 h-20 bg-black bg-opacity-40  justify-center flex items-center '>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 " viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>

                      </div>
                    </div>
                  </div>


                  <div className='py-2 text-start'>Lorem ipsum dolor</div>
                </div>

       



    );
}

export default SquareCard;