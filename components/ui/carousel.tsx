import { motion } from 'framer-motion';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import image from '../../data/image';
import images from '../../data/image'
import { useSwipeable } from 'react-swipeable'



const CarouselSlider = () => {


    console.log(images.length);


    const carousel = useRef(null);
    const [width, setWidth] = useState(0)
    const [position, setPosition] = useState(0)

    const handleSwipe = ({ dir }: any) => {
        if (dir === "Right") {
            if (position < images.length - 1) {
                setPosition(position + 1);
            }
        }
        if (dir === "Left") {
            if (position > 0) {
                setPosition(position - 1);
            }
        }
    };

    const refPassthrough = (el: any) => {
        // call useSwipeable ref prop with el
        handlers.ref(el);

        // set myRef el so you can access it yourself
        carousel.current = el;
    }


    const handlers = useSwipeable({
        onSwiped: ({ dir }: any) => {
            if (dir === "Right") {
                if (position < images.length - 1) {
                    setPosition(position + 1);
                }
            }
            if (dir === "Left") {
                if (position > 0) {
                    setPosition(position - 1);
                }
            }

        }
    });


    const onRight = () => {
        if (position < images.length - 1) {
            setPosition(position + 1);
        }

    }


    const onLeft = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    }



    return (
        // flex flex-row overflow-x-scroll space-x-4

        <div >

            <motion.div  {...handlers} ref={refPassthrough} className=' overflow-hidden'>
                <motion.div
                    drag="x"

                    dragConstraints={{ right: 0, left: -width }}
                    className=' flex flex-row space-x-5  '
                >
                    {
                        images.map((image, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    // initial={{ scale: 0,}}
                                    animate={{
                                        // rotate: 0,
                                        left: `${(index - position) * 60 - 30}vw`,
                                        scale: index === position ? 1 : 1,
                                    }}

                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                    className='w-[100vw] snap-mandatory snap-x '>
                                    <img src={image.src} alt="carousel" className='h-96 w-full snap-center  object-cover pointer-events-none' />
                                </motion.div>
                            )
                        }
                        )
                    }

                </motion.div>

            </motion.div>

        </div>

    );
}

export default CarouselSlider;