

const RectangularCard = () => {
    return (
        <div className='h-32  bg-slate-800 rectangle flex flex-row '>
                <img src={'/singer.jpeg'} alt="list" className=' w-2/5 p-3' />

                <div className='py-2 text-start space-y-2 justify-between flex flex-col'>
                  <div className='text-lg text-white font-semibold'>Lorem ipsum dolor</div>
                  <div className='text-sm text-slate-300 font-light'>Pastor Elikem</div>
                  <div className='text-sm text-slate-300 font-light'>25 June 2022</div>
                </div>
              </div>
        
    );
}

export default RectangularCard;