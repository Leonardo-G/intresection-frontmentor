import Image from 'next/image'
import React from 'react'

export const Front = () => {
    return (
        <div className='flex col-center mt-3'>
            <div className='f-auto'>
                <h1 className='h1'>Make remote work</h1>
                <p className='mt-5 size-2 col-grey width80'>
                    Get your team in sync, no matter your location.
                    Streamline precesses, create team rituals, and 
                    watch productivity soar.
                </p>
                <button className='mt-5 btn btn-dark btn-hover-transparent'>Learn more</button>
            </div>
            <div className='relative f-auto' style={{ width: "100%", height: "700px"}}>
                <Image 
                    src="/image-hero-desktop.png"
                    alt='Imagen Portada'
                    fill
                    className='contain'
                />  
            </div>
        </div>
    )
}
